import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import "./App.css";

function App() {
  const clientId =
    "459676653842-gimcu9k68ij6s3m1d7u059bv4b7qskq1.apps.googleusercontent.com";
  return (
    <div>
      <div>
        <GoogleOAuthProvider clientId={clientId}>
          <GoogleLogin
            onSuccess={(res) => {
              console.log(res);
            }}
            onFailure={(err) => {
              console.log(err);
            }}
          />
        </GoogleOAuthProvider>
        <button>구글로그인</button>
      </div>
    </div>
  );
}

export default App;
