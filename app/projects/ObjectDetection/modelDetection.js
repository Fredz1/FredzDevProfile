"use server"

import { load as cocoModalLoad } from '@tensorflow-models/coco-ssd'
import * as tf from '@tensorflow/tfjs';

let model

const loadedModel = await tf.loadLayersModel("file://./my_model/model.json")

//check for modal
const loadOCRModel = async () => {
  //check for local file 1st
  const localModel = await tf.loadLayersModel('file://./cocoSsdModel.h5')

  if (!localModel) {
    model = await cocoModalLoad()
    await model.save("file://./cocoSsdModel.h5")
  }
}

export const startDetecting = async ( formData ) => {

  //the image is being sent in a form data
  console.log(formData)


  if (!model){
    console.log('no model found')
    await loadOCRModel()
  } 

  console.log('start detecting')
  const image = tf.browser.fromPixels(imageEle)
  const predictions = await model.detect(image)
  console.log(predictions)

  /* if (predictions && canvasEle.current) {
    draw(canvasEle.current.getContext('2d'), predictions);
  } */

  console.log('end detecting')
  return predictions
}

//Get the OCR model