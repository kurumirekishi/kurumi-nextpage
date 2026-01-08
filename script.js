function copyEmail() {
    const email = document.getElementById('email-link').innerText;
    navigator.clipboard.writeText(email).then(() => {
        alert('メールアドレスをコピーしました');
    }).catch(err => {
        console.error('コピーに失敗しました', err);
    });
}
