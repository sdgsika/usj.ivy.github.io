document.addEventListener('DOMContentLoaded', () => {
    // リンクを取得
    const jurassicLink = document.querySelector('a[href="original_accessories.html"]');

    // モーダル要素を作成
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    modal.style.display = 'none';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = '1000';

    // 動画要素を作成
    const video = document.createElement('video');
    video.src = 'video/jurassic-ride.mp4'; // 動画ファイルのパスを指定
    video.controls = true;
    video.width = 800;
    video.style.border = '2px solid #fff';
    video.style.borderRadius = '10px';

    // モーダルを閉じるためのボタン
    const closeButton = document.createElement('button');
    closeButton.textContent = '閉じる';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '20px';
    closeButton.style.right = '20px';
    closeButton.style.padding = '10px 20px';
    closeButton.style.backgroundColor = '#ff0000';
    closeButton.style.color = '#fff';
    closeButton.style.border = 'none';
    closeButton.style.borderRadius = '5px';
    closeButton.style.cursor = 'pointer';

    // モーダルに動画と閉じるボタンを追加
    modal.appendChild(video);
    modal.appendChild(closeButton);
    document.body.appendChild(modal);

    // リンククリック時の動作
    jurassicLink.addEventListener('click', (event) => {
        event.preventDefault(); // デフォルトのリンク動作を無効化
        modal.style.display = 'flex'; // モーダルを表示
        video.play(); // 動画を再生
    });

    // 閉じるボタンの動作
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none'; // モーダルを非表示
        video.pause(); // 動画を停止
        video.currentTime = 0; // 動画を先頭に戻す
    });
});
