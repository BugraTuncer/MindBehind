import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonToast,
} from "@ionic/react";
import { BarcodeScanner } from "@awesome-cordova-plugins/barcode-scanner";
import React from "react";
import Axios from "axios";

const Home: React.FC = () => {
  const [qrCodes, setQrCodes] = React.useState<string[]>([]);
  const [present] = useIonToast();

  const openScanner = async () => {
    const data = await BarcodeScanner.scan();
    if (qrCodes.includes(data.text)) {
      present({
        color: "success",
        message: "QR Code Found it",
        duration: 5000,
      });
    } else {
      present({
        color: "danger",
        message: "Not Found QR Code",
        duration: 5000,
      });
    }
  };

  const pullQrCodes = () => {
    Axios({
      method: "GET",
      proxy: false,
      url: "http://127.0.0.1:3000/qrCodes",
      withCredentials: false,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    }).then((res) => {
      console.log(res.data);
      setQrCodes(res.data);
    });
  };

  React.useEffect(() => {
    pullQrCodes();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>MindBehind</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton expand="block" onClick={openScanner}>
          Scan barcode
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
