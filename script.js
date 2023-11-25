function gerarPDF() {
  // Crie um objeto jsPDF
  var pdf = new jsPDF();

  // Use html2canvas para converter o conteúdo da página em uma imagem
  html2canvas(document.body).then((canvas) => {
    // Adicione a imagem ao PDF
    pdf.addImage(
      canvas.toDataURL("image/png"),
      "PNG",
      0,
      0,
      pdf.internal.pageSize.getWidth(),
      pdf.internal.pageSize.getHeight()
    );

    // Após a geração, você pode salvar ou exibir o PDF
    pdf.save("curriculo.pdf");
  });
}
