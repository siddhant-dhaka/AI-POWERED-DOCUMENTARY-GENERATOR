const original = $('Split Out').all();

return $input.all().map((item, index) => ({
  json: {
    audioUrl: item.json.fileUrl,
    scene_number: original[index].json.scene_number,
    duration: original[index].json.duration
  }
}));
