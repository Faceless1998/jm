const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.onload = resolve;
      script.onerror = reject;
      document.body.appendChild(script);
    });
  };
  
  export const loadExternalScripts = async () => {
    try {
      await loadScript("/vendor/jquery/jquery.min.js");
      await loadScript("/vendor/bootstrap/js/bootstrap.bundle.min.js");
      await loadScript("/js/owl-carousel.js");
      await loadScript("/js/animation.js");
      await loadScript("/js/imagesloaded.js");
      await loadScript("/js/custom.js");
     await loadScript("/js/block.js");
     
     console.log("All scripts loaded successfully!");
    } catch (error) {
      console.error("Error loading scripts:", error);
    }
  };
  