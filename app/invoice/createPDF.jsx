"use server"

import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'
import fs from 'fs'



const createPDF = async (formInfo, servicesList) => {

  console.log(servicesList)

  const pdfDoc = await PDFDocument.create()

  // Embed the Times Roman font
  const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)
  
  // Add a blank page to the document
  const page = pdfDoc.addPage()

  // Get the width and height of the page
  const { width, height } = page.getSize()

  // Draw a string of text toward the top of the page
  page.drawText(`Invoice: ${formInfo.month}-${formInfo.invoiceNumber}`, {
    x: 10,
    y: height-30,
    size: 20,
    font: timesRomanFont,
    color: rgb(0.38, 0.353, 0.133) /* rgb(38%,35.3%,13.3%) */
  })

  page.drawText(`Michele Williams`, {
    x: 10,
    y: height-70,
    size: 40,
    font: timesRomanFont,
    color: rgb(0.659, 0.349, 0.078) /* 65.9, 34.9, 7.8 */
  })

  page.drawText(`Address:`, {
    x: 10,
    y: height-110,
    size: 15,
    font: timesRomanFont,
    color: rgb(0.5, 0.5, 0.5)
  })

  page.drawText(`83 Heldersig Road, Thornton`, {
    x: 10,
    y: height-130,
    size: 15,
    font: timesRomanFont,
    color: rgb(0, 0, 0)
  })

  page.drawText(`7460`, {
    x: 10,
    y: height-150,
    size: 15,
    font: timesRomanFont,
    color: rgb(0, 0, 0)
  })

  page.drawText(`Phone:`, {
    x: 10,
    y: height-170,
    size: 15,
    font: timesRomanFont,
    color: rgb(0.5, 0.5, 0.5)
  })

  page.drawText(`${formInfo.phone}`, {
    x: 60,
    y: height-170,
    size: 15,
    font: timesRomanFont,
    color: rgb(0, 0, 0)
  })

  page.drawText(`Date:`, {
    x: 10,
    y: height-190,
    size: 15,
    font: timesRomanFont,
    color: rgb(0.5, 0.5, 0.5)
  })

  page.drawText(` ${formInfo.date}`, {
    x: 40,
    y: height-190,
    size: 15,
    font: timesRomanFont,
    color: rgb(0, 0, 0)
  })

  page.drawText(`Bill To: ${formInfo.billTo.receiverName}`, {
    x: 10,
    y: height-210,
    size: 18,
    font: timesRomanFont,
    color: rgb(0.659, 0.349, 0.078)
  })

  page.drawText(`Att: ${formInfo.billTo.attentionName}`, {
    x: 10,
    y: height-230,
    size: 15,
    font: timesRomanFont,
    color: rgb(0.5, 0.5, 0.5)
  })

  page.drawText(`Address: ${formInfo.billTo.receiverAddress}`, {
    x: 10,
    y: height-250,
    size: 15,
    font: timesRomanFont,
    color: rgb(0.5, 0.5, 0.5)
  })

  page.drawText(`Phone: ${formInfo.billTo.receiverPhone}`, {
    x: 10,
    y: height-270,
    size: 15,
    font: timesRomanFont,
    color: rgb(0.5, 0.5, 0.5)
  })

  page.drawText(`Email: ${formInfo.billTo.receiverEmail}`, {
    x: 10,
    y: height-290,
    size: 15,
    font: timesRomanFont,
    color: rgb(0.5, 0.5, 0.5)
  })

  page.drawText(`For Services:`, {
    x: width/2,
    y: height-210,
    size: 20,
    font: timesRomanFont,
    color: rgb(0.659, 0.349, 0.078)
  })

  page.drawText(`${formInfo.forServices}`, {
    x: width/2,
    y: height-230,
    size: 15,
    font: timesRomanFont,
    color: rgb(0.5, 0.5, 0.5)
  })

  // Draw line under Bill To
  page.drawLine({
    start: { x: 10, y: height-300 },
    end: { x: width-10, y: height-300 },
    thickness: 0.5,
    color: rgb(0.659, 0.349, 0.078)
  })

  
  //Table Headings

  let headingsHeight = height - 320


  page.drawText(`Description`, {
    x: 10,
    y: headingsHeight,
    size: 16,
    font: timesRomanFont,
    color: rgb(0.5, 0.5, 0.5)
  })
  
  page.drawText(`Date`, {
    x: width/2,
    y: headingsHeight,
    size: 16,
    font: timesRomanFont,
    color: rgb(0.5, 0.5, 0.5)
  })

  page.drawText(`Hours`, {
    x: 450,
    y: headingsHeight,
    size: 16,
    font: timesRomanFont,
    color: rgb(0.5, 0.5, 0.5)
  })

  page.drawText(`Amount`, {
    x: width-75,
    y: headingsHeight,
    size: 16,
    font: timesRomanFont,
    color: rgb(0.5, 0.5, 0.5)
  })

  // Draw line under Table Headings
  page.drawLine({
    start: { x: 10, y: headingsHeight-10 },
    end: { x: width-10, y: headingsHeight-10 },
    thickness: 0.5,
    color: rgb(0.659, 0.349, 0.078)
  })
  
  // Render Line Items
  let y = height - 330
  let total = 0

  servicesList.forEach((service, index) => {
    console.log(service.serviceTotal)

    service.serviceTotal ? total += parseInt(service.serviceTotal) : total += 0
    y -= 20

    page.drawText(`${service.serviceDescription}`, {
      x: 10,
      y: y,
      size: 15,
      font: timesRomanFont,
      color: rgb(0.5, 0.5, 0.5)
    })

    page.drawText(`${service.serviceDate}`, {
      x: width/2,
      y: y,
      size: 15,
      font: timesRomanFont,
      color: rgb(0.5, 0.5, 0.5)
    })

    page.drawText(`${service.serviceHours}`, {
      x: 450,
      y: y,
      size: 15,
      font: timesRomanFont,
      color: rgb(0.5, 0.5, 0.5)
    })

    page.drawText(`R ${service.serviceTotal}`, {
      x: width-75,
      y: y,
      size: 15,
      font: timesRomanFont,
      color: rgb(0.5, 0.5, 0.5)
    })
  })

  // Draw line under Line Items Table
  page.drawLine({
    start: { x: 10, y: y-20 },
    end: { x: width-10, y: y-20 },
    thickness: 0.5,
    color: rgb(0.659, 0.349, 0.078)
  })

  // Draw Total 
  page.drawText(`Total:`, {
    x: 450,
    y: y-40,
    size: 15,
    font: timesRomanFont,
    color: rgb(0, 0, 0)
  })

  page.drawText(`R ${total}`, {
    x: width-75,
    y: y-40,
    size: 15,
    font: timesRomanFont,
    color: rgb(0, 0, 0)
  })

  // Draw line under Total
  page.drawLine({
    start: { x: 10, y: y-50 },
    end: { x: width-10, y: y-50 },
    thickness: 0.5,
    color: rgb(0.659, 0.349, 0.078)
  })

  // Create banking details
  page.drawText(`Banking Details:`, {
    x: 10,
    y: y-70,
    size: 15,
    font: timesRomanFont,
    color: rgb(0.5, 0.5, 0.5)
  })

  page.drawText(`Bank: FNB`, {
    x: 10,
    y: y-90,
    size: 15,
    font: timesRomanFont,
    color: rgb(0, 0, 0)
  })
  



  

  



  // Serialize the PDFDocument to bytes (a Uint8Array)
  //const pdfBytes = await pdfDoc.save()
  const pdfBytes = await pdfDoc.saveAsBase64({ dataUri: true })

  //fs.writeFileSync('./output.pdf', pdfBytes)

  return pdfBytes
}

export default createPDF