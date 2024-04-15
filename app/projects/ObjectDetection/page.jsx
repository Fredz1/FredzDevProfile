"use client"

import { useState, useEffect, useRef } from 'react'
import style from './objectDetection.module.scss'
import Image from 'next/image'
import axios from 'axios';
import { load as cocoModalLoad } from '@tensorflow-models/coco-ssd'
import * as tf from '@tensorflow/tfjs'
import { startDetecting } from './modelDetection'

const ObjectDetection = () => {

  const [predictions, setPredictions] = useState([])
  const [objectDetector, setObjectDetectors] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [detectedObjects, setDetectedObjects] = useState([])
  const [uploadedImage, setUploadedImage] = useState()
  const canvasEle = useRef()
  const imageEle = useRef()

  const detect = async () => {

    // add the image into a form
    /* const formData = new FormData()
    formData.append('image', uploadedImage) */


    let predictions = await startDetecting(imageEle)

    if (predictions && canvasEle.current) {
      draw(canvasEle.current.getContext('2d'), predictions)
    } 
  }

  const setImage = event => {
    if (event.target.files && event.target.files[0]) {
      const image = event.target.files[0]
        if (canvasEle.current) {
          const canvas = canvasEle.current.getContext('2d')
          canvas.reset()
        }
      setUploadedImage(URL.createObjectURL(image))
    }
  }

  const draw = (ctx, objects) => {
        canvasEle.current.width = imageEle.current.width
        canvasEle.current.height = imageEle.current.height
        // Clear part of the canvas
        ctx.fillStyle = '#000000'
        ctx.fillRect(0, 0, imageEle.current.width, imageEle.current.height)

        ctx.drawImage(
            imageEle.current,
            0,
            0,
            imageEle.current.width,
            imageEle.current.height
        );
        for (let i = 0; i < objects.length; i += 1) {
            // Draw the background rectangle
            ctx.fillStyle = 'rgba(0, 128, 0, 0.5)'
            ctx.strokeStyle = 'white'
            ctx.fillRect(
                objects[i].bbox[0],
                objects[i].bbox[1],
                objects[i].bbox[2],
                20
            )

            ctx.font = '16px Arial'
            ctx.fillStyle = 'white'
            ctx.fillText(
                objects[i].class,
                objects[i].bbox[0] + 4,
                objects[i].bbox[1] + 16
            )

            ctx.beginPath();
            ctx.rect(
                objects[i].bbox[0],
                objects[i].bbox[1],
                objects[i].bbox[2],
                objects[i].bbox[3]
            )
            ctx.strokeStyle = 'green'
            ctx.stroke()
            ctx.closePath()
        }
    }

  return (
    <div>
      <h1>Object Detection</h1>
      <div className={style.container}>
        {isLoading ? (
          <div className={style.loader}>Loading...</div>
        ) : (
          <div className={style.imageSection}>
            <div className={style.previewArea}>
              {uploadedImage && (
                <>
                  <Image
                    ref={imageEle}
                    src={uploadedImage}
                    alt='sample image'
                    width={500}
                    height={500}
                    style={{ objectFit: 'fill' }}
                  />
                  <canvas
                    ref={canvasEle}
                    className={style.canvas}
                    width={500}
                    height={500}
                  />
                </>
              )}
            </div>
            <div>
              <label htmlFor='fileSelect' className={style.fileUpload}>
                <span>
                  <i className='bi bi-upload'></i>
                </span>
                Upload an image
              </label>
              <input
                id='fileSelect'
                type='file'
                onChange={e => setImage(e)}
              />
            </div>
            {uploadedImage && (
              <button
                className={style.detectionBtn}
                onClick={() => detect()}>
                Start detection
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default ObjectDetection;