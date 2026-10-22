const audio = Buffer.from($json.audioContent, 'base64');

// Get the matching scene from Split Out
const scene = $('Split Out').all()[$itemIndex].json;

return {
  json: {
    scene_number: scene.scene_number,
    duration: scene.duration,
    visual: scene.visual,
    narration_segment: scene.narration_segment,
    audioFileSize: audio.length
  },
  binary: {
    audio: {
      data: audio.toString('base64'),
      mimeType: 'audio/mpeg',
      fileName: `scene-${scene.scene_number}.mp3`,
      fileExtension: 'mp3',
      fileSize: audio.length
    }
  }
};
