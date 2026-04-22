function showWeatherMessage() {
  // ドロップダウンの選択値を取得する
  const weather = document.getElementById('weather-select').value;

  // if / else if / else で天気に応じたメッセージを決める
  let message;
  if (weather === 'sunny') {
    message = '今日は晴れです。お出かけ日和ですね！';
  } else if (weather === 'cloudy') {
    message = '今日は曇りです。念のため傘を持っていきましょう。';
  } else if (weather === 'rainy') {
    message = '今日は雨です。傘を忘れずに！';
  } else if (weather === 'snowy') {
    message = '今日は雪です。暖かくして出かけましょう。';
  } else {
    message = '天気情報が不明です。';
  }

  // メッセージを表示する
  document.getElementById('weather-message').textContent = message;
}
