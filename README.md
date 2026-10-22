# ⚡ SCENECRAFT AI

### From one idea to a whole video. Automatically.

**An AI-powered short-form video factory --- orchestrated with n8n.**

`<br/>`{=html}

![Workflow](https://img.shields.io/badge/Workflow-n8n-FF6D5A?style=for-the-badge&logo=n8n&logoColor=white)
![LLM](https://img.shields.io/badge/Brains-Gemini_AI-4285F4?style=for-the-badge&logo=googlegemini&logoColor=white)
![Voice](https://img.shields.io/badge/Voice-Google_TTS-34A853?style=for-the-badge&logo=googlecloud&logoColor=white)
![Rendering](https://img.shields.io/badge/Rendering-FFmpeg_Micro-6C5CE7?style=for-the-badge)
![Runtime](https://img.shields.io/badge/Runtime-Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

**Give it a topic. Let the pipeline do the production.**
:::

------------------------------------------------------------------------

## 🎬 The Idea

What if turning an idea into a narrated short video was as simple as
entering a topic?

**SceneCraft AI** is an automated video-generation pipeline built in
**n8n**. It connects AI scriptwriting, scene visuals, voice synthesis,
and video rendering into one workflow---from a single topic to one
assembled MP4.

> 💡 **The goal:** reduce repetitive production work by automating the
> pipeline from script to rendered video.

## 🧠 How the Pipeline Works

``` mermaid
flowchart TD
    A(["⚡ Enter a topic"]) --> B["Gemini AI<br/>Script + scene plan"]
    B --> C["Parse structured JSON"]
    C --> D["Split into scenes"]
    D --> E["Generate scene visuals"]
    D --> F["Google Text-to-Speech"]
    E --> G["Upload visual assets"]
    F --> H["Upload audio assets"]
    G --> I["Merge scene data"]
    H --> I
    I --> J["FFmpeg Micro<br/>Render each scene"]
    J --> K["Wait for jobs to finish"]
    K --> L["Collect rendered clip URLs"]
    L --> M["FFmpeg Micro<br/>Assemble final video"]
    M --> N(["🎉 Final MP4"])
```

## ✨ What It Does

  -----------------------------------------------------------------------
  Capability                          What happens
  ----------------------------------- -----------------------------------
  🪄 AI scriptwriting                 Gemini generates a short script and
                                      structured scene descriptions from
                                      the topic.

  🧩 Scene orchestration              The script is parsed into
                                      individual scene items for
                                      independent processing.

  🖼️ Visual generation                An image-generation service creates
                                      visuals for the scenes.

  🗣️ AI narration                     Google Text-to-Speech converts each
                                      scene's narration into audio.

  ☁️ Asset handling                   Generated images and audio are
                                      uploaded and their URLs are passed
                                      through the workflow.

  🎞️ Scene rendering                  FFmpeg Micro combines each scene's
                                      visual and narration into a video
                                      clip.

  🧵 Final assembly                   The rendered clips are concatenated
                                      into one final video.
  -----------------------------------------------------------------------

## 🛠️ Built With

-   **n8n** --- visual workflow orchestration
-   **Gemini AI** --- script and scene-plan generation
-   **Google Text-to-Speech** --- narration
-   **Image-generation service** --- scene visuals
-   **FFmpeg Micro** --- transcoding and video assembly
-   **HTTP APIs + JavaScript Code nodes** --- integrations and data
    transformation
-   **Docker** --- local runtime environment

## 🚀 Run It

### Prerequisites

Before running the workflow, configure:

-   A working n8n instance
-   Gemini API access
-   Google Text-to-Speech access
-   The image-generation service used by your workflow
-   FFmpeg Micro node/service access
-   Any required asset-upload or storage credentials

### Launch checklist

1.  Import or recreate the workflow in n8n.
2.  Configure credentials and endpoints for each connected service.
3.  Enter a topic in the workflow's **Topic** input.
4.  Execute the workflow.
5.  Let the scene-rendering jobs finish.
6.  Retrieve and review the final MP4.

> ⚙️ Exact node settings depend on the APIs and services configured in
> your instance.

## 🧱 Scene Data Contract

Each scene is expected to carry consistent metadata through the
workflow:

``` json
{
  "scene_number": 1,
  "duration": 8,
  "visual": "Description of the scene visual",
  "spoken_text": "Narration for this scene"
}
```

The scene count can vary depending on the generated script. Keep the
workflow dynamic rather than assuming a fixed number of scenes.

## 🔐 Keep Your Keys Safe

-   Store API credentials in n8n credentials or environment variables.
-   Review exported workflow JSON before committing it---credentials or
    private URLs may be present.
-   Never publish API keys, access tokens, or unexpired signed download
    URLs.
-   Check your repository contents before making it public.

## 🗺️ Roadmap Ideas

Potential next upgrades---not claims about features already implemented:

-   [ ] Burn subtitles into the final video
-   [ ] Add stronger pan-and-zoom motion to still images
-   [ ] Add transitions and background music
-   [ ] Add automatic retries and clearer error handling
-   [ ] Publish finished videos automatically to a chosen platform

## 🧪 Current Scope

The current workflow automates script generation, scene visual and
narration generation, per-scene rendering, and final video assembly.
Optional upgrades in the roadmap should be marked complete only after
they are implemented and tested.

## 🤝 Contributions

Ideas, improvements, and bug reports are welcome. If you adapt this
workflow, document any additional services and credentials needed to run
your version.

## 📄 License

No license has been selected yet. Add a `LICENSE` file before granting
others explicit reuse rights.

------------------------------------------------------------------------

::: {align="center"}
**One topic. Multiple scenes. One automated pipeline.** ⚡

*Built with curiosity, APIs, and a lot of connected nodes.*
:::
