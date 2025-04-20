export default function Login() {
    return (
        <div className="login-component">
            <div className="login-container">
                <div className="input-fields-container">
                    <label>ログイン：</label>
                    <input type="text" placeholder="ユーザーID" />
                    <label>パスワード：</label>
                    <input type="text" placeholder="パスワード" />
                </div>
            </div>
        </div>
    );
}
