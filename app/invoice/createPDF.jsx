"use server"

import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'
import fs from 'fs'

//color
//R 0.7584
//G 0.1530
//B 0.2687


const createPDF = async (formInfo, servicesList) => {



  formInfo.bank =
    `Standard Bank\n123456789\n051001\n`

  const colorBerry = rgb(0.7584, 0.1530, 0.2687)
  const colorBlack = rgb(0, 0, 0)

  const pdfDoc = await PDFDocument.create()

  // Embed the Times Roman font
  const fontStyle = await pdfDoc.embedFont(StandardFonts.Helvetica)
  const fontStyleBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold)
  const fontStyleItalic = await pdfDoc.embedFont(StandardFonts.HelveticaOblique)
  
  // Add a blank page to the document
  const page = pdfDoc.addPage()

  // Get the width and height of the page
  const { width, height } = page.getSize()

  
  page.drawText(`Michéle Williams`, {
    x: 48,
    y: height-30,
    size: 20,
    font: fontStyle,
    color: colorBerry
  })

  page.drawText(`ADDRESS:`, {
    x: 48,
    y: height-62,
    size: 12,
    font: fontStyleBold,
    color: colorBerry
  })

  page.drawText(
    `83 Heldersig Road,\nThornton, 7460`, {
    x: 48,
    y: height-80,
    size: 12,
    font: fontStyle,
    color: colorBlack,
    lineHeight: 15
    
  })
  
  page.drawText(`INVOICE:`, {
    x: width/2+50,
    y: height-62,
    size: 12,
    font: fontStyleBold,
    color: colorBerry
  })

  const invoiceLength = fontStyle.widthOfTextAtSize(`${formInfo.month}-${formInfo.invoiceNumber}`, 12)

  page.drawText(`${formInfo.month}-${formInfo.invoiceNumber}`, {
    x: width - invoiceLength - 48,
    y: height-62,
    size: 12,
    font: fontStyle,
    color: colorBlack
  })

  /* page.drawText(`Phone:`, {
    x: width/2,
    y: height-62,
    size: 12,
    font: fontStyle,
    color: colorBerry
  }) */

  /* page.drawText(`082 555 5555`, {
    x: width - 120,
    y: height - 62,
    size: 12,
    font: fontStyle,
    color: colorBlack
  }) */

  

  page.drawText(`DATE:`, {
    x: width/2+50,
    y: height-85,
    size: 12,
    font: fontStyleBold,
    color: colorBerry
  })

  //get the length of the date string on the page
  const dateLength = fontStyle.widthOfTextAtSize(formInfo.date, 12)

  page.drawText(`${formInfo.date}`, {
    x: width - dateLength - 48,
    y: (height-85),
    size: 12,
    font: fontStyle,
    color: colorBlack
  })

  
  //Services 
  page.drawText(`SERVICES`, {
    x: width/2+50,
    y: height - 108,
    size: 12,
    font: fontStyleBold,
    color: colorBerry
  })
  
  const servicesLength = fontStyle.widthOfTextAtSize(formInfo.forServices, 12)

  page.drawText(`${formInfo.forServices}`, {
    x: width - servicesLength - 48,
    y: height - 108,
    size: 12,
    font: fontStyle,
    color: colorBlack
  })

  //draw line under Services across page width
  page.drawLine({
    start: { x: 48, y: height-125 },
    end: { x: width - 48, y: height-125 },
    thickness: 0.5,
    color: colorBlack
  })
  



  page.drawText(`BILL TO:`, {
    x: 48,
    y: height-150,
    size: 12,
    font: fontStyleBold,
    color: colorBerry
  })

  page.drawText(`ATT:`, {
    x: 48,
    y: height - 175,
    size: 12,
    font: fontStyleBold,
    color: colorBerry
  })

  //get length of Att
  const attLength = fontStyle.widthOfTextAtSize(`ATT:`, 12)

  page.drawText(`${formInfo.billTo.receiverName}`, {
    x: 48 + attLength + 20,
    y: height-175,
    size: 12,
    font: fontStyle,
    color: colorBlack
  })

  page.drawText(`COMPANY:`, {
    x: width / 2 + 50,
    y: height - 175,
    size: 12,
    font: fontStyleBold,
    color: colorBerry
  })

  const getCompanyLength = fontStyle.widthOfTextAtSize(`${formInfo.billTo.attentionName}`, 12)

  page.drawText(`${formInfo.billTo.attentionName}`, {
    x: width - getCompanyLength - 48,
    y: height-175,
    size: 12,
    font: fontStyle,
    color: colorBlack
  })

  page.drawText(`ADDRESS:`, {
    x: width / 2 + 50,
    y: height-200,
    size: 12,
    font: fontStyleBold,
    color: colorBerry
  })

  page.drawText(`${formInfo.billTo.receiverAddress}`, {
    x: width / 2 + 50,
    y: height-220,
    size: 12,
    font: fontStyle,
    color: colorBlack
  })

  //Contact Heading
  page.drawText(`CONTACT:`, {
    x: 48,
    y: height - 200,
    size: 12,
    font: fontStyleBold,
    color: colorBerry
  })

  page.drawText(`${formInfo.billTo.receiverPhone}`, {
    x: 48,
    y: height-220,
    size: 12,
    font: fontStyle,
    color: colorBlack
  })

  page.drawText(`${formInfo.billTo.receiverEmail}`, {
    x: 48,
    y: height-240,
    size: 12,
    font: fontStyle,
    color: colorBlack
  })

  //draw line under Bill To
  page.drawLine({
    start: { x: 48, y: height-260 },
    end: { x: width-48, y: height-260 },
    thickness: 0.5,
    color: colorBlack
  })

  
  //Table Headings

  let headingsHeight = height - 290


  page.drawText(`ITEM`, {
    x: 48,
    y: headingsHeight,
    size: 12,
    font: fontStyleBold,
    color: colorBerry
  })
  
  page.drawText(`DETAILS`, {
    x: 96,
    y: headingsHeight,
    size: 12,
    font: fontStyleBold,
    color: colorBerry
  })

  page.drawText(`DATE`, {
    x: 320,
    y: headingsHeight,
    size: 12,
    font: fontStyleBold,
    color: colorBerry
  })

  page.drawText(`HOURS`, {
    x: 405,
    y: headingsHeight,
    size: 12,
    font: fontStyleBold,
    color: colorBerry
  })

  //get length of Amount
  const amountLength = fontStyle.widthOfTextAtSize(`AMOUNT`, 12)

  page.drawText(`AMOUNT`, {
    x: width - amountLength - 48,
    y: headingsHeight,
    size: 12,
    font: fontStyleBold,
    color: colorBerry
  })

  // Render Line Items
  let y = headingsHeight - 10
  let total = 0


  servicesList.forEach((service, index) => {

    service.serviceTotal ? total += parseInt(service.serviceTotal) : total += 0
    y -= 20

    page.drawText(`${index + 1}`, {
      x: 48,
      y: y,
      size: 12,
      color: colorBlack
    }),

    page.drawText(`${service.serviceDescription}`, {
      x: 96,
      y: y,
      size: 12,
      font: fontStyle,
      color: colorBlack
    })

    page.drawText(`${service.serviceDate}`, {
      x: 320,
      y: y,
      size: 12,
      font: fontStyle,
      color: colorBlack
    })

    page.drawText(`${service.serviceHours}`, {
      x: 405,
      y: y,
      size: 12,
      font: fontStyle,
      color: colorBlack
    })

    //get length of Amount
    const amountLength = fontStyle.widthOfTextAtSize(`R ${service.serviceTotal}`, 12)


    page.drawText(`R ${service.serviceTotal}`, {
      x: width - amountLength - 48,
      y: y,
      size: 12,
      font: fontStyle,
      color: colorBlack
    })
  })

  // Draw Total 
  page.drawText(`TOTAL:`, {
    x: 48,
    y: y-40,
    size: 12,
    font: fontStyleBold,
    color: colorBlack
  })

  //get length of Total
  const totalLength = fontStyle.widthOfTextAtSize(`R ${total}`, 12)

  page.drawText(`R ${total}`, {
    x: width - totalLength - 48,
    y: y - 40,
    size: 12,
    font: fontStyleBold,
    color: colorBlack
  })

  // Draw line under Total
  page.drawLine({
    start: { x: 48, y: y-60 },
    end: { x: width-48, y: y-60 },
    thickness: 1,
    color: colorBlack
  })

  // Create banking details
  page.drawText(`BANKING DETAILS`, {
    x: 48,
    y: y-90,
    size: 12,
    font: fontStyleBold,
    color: colorBerry
  })

  /* page.drawText(`Bank:`, {
    x: 10,
    y: y-100,
    size: 15,
    font: fontStyle,
    color: rgb(0.5, 0.5, 0.5)
  }) */

  page.drawText(`${formInfo.bank}`, {
    x: 48,
    y: y-110,
    size: 12,
    font: fontStyle,
    color: colorBlack,
    lineHeight: 15
  })

  //Reference number

  //get lenth of Reference Number
  const refLength = fontStyle.widthOfTextAtSize(`REFERENCE NUMBER`, 12)

  page.drawText(`REFERENCE NUMBER`, {
    x: width - refLength - 48,
    y: y-90,
    size: 12,
    font: fontStyleBold,
    color: colorBerry,
  })

  //get length of Reference Number
  const refNumberLength = fontStyle.widthOfTextAtSize(`${formInfo.month}-${formInfo.invoiceNumber}`, 12)

  //add reference number again
  page.drawText(`${formInfo.month}-${formInfo.invoiceNumber}`, {
    x: width - refNumberLength - 48,
    y: y-110,
    size: 12,
    font: fontStyle,
    color: colorBlack
  })

  //add line under banking details and reference number

  page.drawLine({
    start: { x: 48, y: y-180 },
    end: { x: width-48, y: y-180 },
    thickness: 1,
    color: colorBlack
  })


  // get width of Thank you message
  const thankYouLength = fontStyle.widthOfTextAtSize(`THANK YOU FOR YOU BUSINESS`, 14)

  page.drawText(`THANK YOU FOR YOU BUSINESS`, {
    x: (width/2)-thankYouLength/2,
    y: y-210,
    size: 14,
    font: fontStyleBold,
    color: colorBlack,
  })

  // Serialize the PDFDocument to bytes (a Uint8Array)
  //const pdfBytes = await pdfDoc.save()
  const pdfBytes = await pdfDoc.saveAsBase64({ dataUri: true })

  fs.writeFileSync('./output.pdf', pdfBytes)

  return pdfBytes
}

export default createPDF