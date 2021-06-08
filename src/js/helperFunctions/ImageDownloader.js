export default function ImageDownloader() {
  return {
    download: (imageUrlArray, namesOfDownloadedImages) => {
      imageUrlArray.forEach((url, idx) => {
        fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "image/jpeg",
          },
        })
          .then((res) => res.blob())
          .then((blob) => {
            const windUrl = window.URL.createObjectURL(new Blob([blob]));

            const link = document.createElement("a");
            link.href = windUrl;
            link.setAttribute("download", `${namesOfDownloadedImages[idx]}.jpg`);

            document.body.appendChild(link);

            link.click();

            link.parentNode.removeChild(link);
          });
      });
    },
  };
}
