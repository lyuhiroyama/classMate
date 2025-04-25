export default function Login() {
    return (
        <div className="login-component">
            <div className="login-container">
                <div className="input-fields-container">
                    <div className="label-and-input">
                        <label className="input-labels">ログイン：</label>
                        <input type="text" placeholder="ユーザーID" />
                    </div>
                    <div className="label-and-input">
                        <label className="input-labels">パスワード：</label>
                        <input type="text" placeholder="パスワード" />
                    </div>
                </div>
            </div>
        </div>
    );
}
