import { useTranslation } from "react-i18next";
import "./block.css";

const BlockC = () => {
  const { t } = useTranslation();

  return (
    <div
      style={{
        height: "100vh",
        background: "linear-gradient(135deg, #4f46e5, #9333ea)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
          maxWidth: "600px",
        }}
      >
        <div style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "20px" }}>
          🏗️ {t("blockC.title")}
        </div>
        <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>{t("blockC.comingSoon")}</h1>
        <p style={{ fontSize: "1.2rem", color: "#e0e0e0", marginBottom: "30px" }}>
          {t("blockC.description")}
        </p>
        <a
          href="/"
          style={{
            padding: "12px 24px",
            backgroundColor: "white",
            color: "#4f46e5",
            borderRadius: "9999px",
            textDecoration: "none",
            fontSize: "1rem",
          }}
        >
          {t("blockC.backHome")}
        </a>
      </div>
    </div>
  );
};

export default BlockC;
