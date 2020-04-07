console.log("Welcome to B2S");

let viz;
const vizContainer = document.getElementById("vizContainer");
const url =
  "https://public.tableau.com/views/AveragetimetrendsintheLondonMarathon/Dashboard1";
const options = {
  device: "desktop",
};

const exportToPDF = document.getElementById("exportToPDF");
const exportToImage = document.getElementById("exportToImage");

function initViz() {
  console.log("Hello DS!");
  viz = new tableau.Viz(vizContainer, url, options);
}

exportToPDF.addEventListener("click", function () {
  console.log("hello from my export to pdf button");
  viz.showExportPDFDialog();
});
exportToImage.addEventListener("click", function () {
  console.log("hello from my export to image button");
  viz.showExportImageDialog();
});

document.addEventListener("DOMContentLoaded", initViz());
