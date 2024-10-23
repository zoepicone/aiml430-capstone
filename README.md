# GANs For Image Generation Website

## Introduction

This is a repository for my AIML430 capstone project, on GANs For Image Generation. This is a simple website which aims to provide an introduction to GANs and how they can be used for image generation, along with their implications and applications. 

The website is built using Rails 8 and deployed on a Hetzner Cloud server, using Kamal to automate all deployment tasks. The website is built upon a custom theme, and uses Tailwind CSS and Flowbite for styling. JavaScript components are built using Stimulus. KaTeX is used for rendering LaTeX math equations. Gradio is used for the interactive demonstration of a GAN model.

## Website

The website is live at [https://gan.zoepicone.dev](https://gan.zoepicone.dev).

## Installation

To run the website locally, clone the repository and run the following commands:

```bash
bundle install
npm install
rails db:create
./bin/dev
```

The website will be available at the IP address and port specified in the output of the `./bin/dev` command.

## Deployment

To deploy the website, you must have the following environment variables set:

- `KAMAL_REGISTRY_TOKEN` - The personal access token for your Docker registry, used to push images.

You will also have to modify `config/deploy.yml` to match your server's IP address and SSH key.

To deploy the website, run the following command:

```bash
kamal setup
```
