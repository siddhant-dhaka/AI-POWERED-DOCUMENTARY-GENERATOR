const items = $input.all();

return [
  {
    json: {
      videos: items.map(item => item.json.url)
    }
  }
];
