import {Controller} from "@hotwired/stimulus"
import {Client} from "@gradio/client";

export default class extends Controller {
    static targets = [ "classlabel" ]

    async generate() {
        // Disable the generate button
        document.getElementById("generate-button").disabled = true;
        document.getElementById("generate-button").innerText = "Generating...";

        let randomInt = this.getRandomInt(4294967295);
        console.log(randomInt);
        console.log(this.classlabel);

        const client = await Client.connect("SIGGRAPH2022/StyleGAN-XL");
        const result = await client.predict("/run", {
            model_name: "imagenet128",
            seed: randomInt,
            truncation_psi: 0.7,
            class_index: this.classlabel,
            tx: 0,
            ty: 0,
            angle: 0,
        });

        let url = result.data[0].url;

        // Is there a more Stimulus-y way to do this?

        // Set the image source
        document.getElementById("generated-image").hidden = false;
        document.getElementById("generated-image").src = url;
        document.getElementById("generated-image").alt = "Generated Image";

        // Enable the generate button
        document.getElementById("generate-button").disabled = false;
        document.getElementById("generate-button").innerText = "Generate";
    }

    get classlabel() {
        return Number(this.classlabelTarget.value);
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
}
