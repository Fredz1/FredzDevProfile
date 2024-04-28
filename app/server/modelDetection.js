"use server"

import { load as cocoModalLoad } from '@tensorflow-models/coco-ssd'
import * as tf from '@tensorflow/tfjs';
import { createReadStream } from 'fs';
import FormData from 'form-data';
import axios from 'axios';

let model

//check for modal
const loadOCRModel = async () => {
  //check for local file 1st
  /* const localModel = await tf.loadLayersModel('file://./cocoSsdModel.h5') */


  if (!model) {
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

const handleRequest = async (req, res) => {
  try {
    // Read the image file from the request
    const imageFile = req.files.image;

    // Create a new FormData object
    const formData = new FormData();

    // Append the image file to the FormData object
    formData.append('image', createReadStream(imageFile.path));

    // Call the startDetecting function with the FormData object
    const predictions = await startDetecting(formData);

    // Send the predictions as the response
    res.json(predictions);
  } catch (error) {
    // Handle any errors that occur during the detection process
    console.error('Error detecting objects:', error);
    res.status(500).json({ error: 'Error detecting objects' });
  }
};

// Export the handleRequest function
export { handleRequest };