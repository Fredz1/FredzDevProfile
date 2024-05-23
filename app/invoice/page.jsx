"use client"

import { useState } from 'react';
import style from './invoiceStyle.module.scss';
import createPDF from './createPDF';

const Page = () => {

  const invoiceInfo = {
    invoiceNumber: '',
    month: '',
    date: '',
    billTo: {
      receiverName: '',
      attentionName: '',
      receiverAddress: '',
      receiverPhone: '',
      receiverEmail: '',
    },
    services: [
      {
        serviceDescription: '',
        serviceAmount: '',
        serviceRate: '',
        serviceTotal: '',
      },
    ],
    forServices: '',
    servicesTotal: '',
  }

  const [formInfo, setFormInfo] = useState(invoiceInfo)

  const handleSubmit = async e => {
    e.preventDefault()
    const response = await createPDF(formInfo)

    console.log(response)


  }


  return (
    <div>
      <h1>Invoice Page</h1>
      <form>
        <label htmlFor="invoiceNumber">invoiceNumber:</label>
        <input
          type="text"
          id="invoiceNumber"
          value={formInfo.invoiceNumber}
          onChange={(e) => setFormInfo({ ...formInfo, invoiceNumber: e.target.value })}
        />

        <label htmlFor="month">Month:</label>
        <input
          type="text"
          id="month"
          value={formInfo.month}
          onChange={(e) => setFormInfo({ ...formInfo, month: e.target.value })}
        />

        <label htmlFor="date">Date:</label>
        <input
          type="text"
          id="date"
          value={formInfo.date}
          onChange={(e) => setFormInfo({ ...formInfo, date: e.target.value })}
        />

        <label htmlFor="receiverName">Receiver Name:</label>
        <input
          type="text"
          id="receiverName"
          value={formInfo.billTo.receiverName}
          onChange={(e) =>
            setFormInfo({
              ...formInfo,
              billTo: { ...formInfo.billTo, receiverName: e.target.value },
            })
          }
        />

        <label htmlFor="attentionName">Attention Name:</label>
        <input
          type="text"
          id="attentionName"
          value={formInfo.billTo.attentionName}
          onChange={(e) =>
            setFormInfo({
              ...formInfo,
              billTo: { ...formInfo.billTo, attentionName: e.target.value },
            })
          }
        />

        <label htmlFor="receiverAddress">Receiver Address:</label>
        <input
          type="text"
          id="receiverAddress"
          value={formInfo.billTo.receiverAddress}
          onChange={(e) =>
            setFormInfo({
              ...formInfo,
              billTo: { ...formInfo.billTo, receiverAddress: e.target.value },
            })
          }
        />

        <label htmlFor="receiverPhone">Receiver Phone:</label>
        <input
          type="text"
          id="receiverPhone"
          value={formInfo.billTo.receiverPhone}
          onChange={(e) =>
            setFormInfo({
              ...formInfo,
              billTo: { ...formInfo.billTo, receiverPhone: e.target.value },
            })
          }
        />

        <label htmlFor="receiverEmail">Receiver Email:</label>
        <input
          type="text"
          id="receiverEmail"
          value={formInfo.billTo.receiverEmail}
          onChange={(e) =>
            setFormInfo({
              ...formInfo,
              billTo: { ...formInfo.billTo, receiverEmail: e.target.value },
            })
          }
        />

        <label htmlFor="serviceDescription">Service Description:</label>
        <input
          type="text"
          id="serviceDescription"
          value={formInfo.services[0].serviceDescription}
          onChange={(e) =>
            setFormInfo({
              ...formInfo,
              services: [
                {
                  ...formInfo.services[0],
                  serviceDescription: e.target.value,
                },
              ],
            })
          }
        />

        <label htmlFor="serviceAmount">Service Amount:</label>
        <input
          type="text"
          id="serviceAmount"
          value={formInfo.services[0].serviceAmount}
          onChange={(e) =>
            setFormInfo({
              ...formInfo,
              services: [
                {
                  ...formInfo.services[0],
                  serviceAmount: e.target.value,
                },
              ],
            })
          }
        />

        <label htmlFor="serviceRate">Service Rate:</label>
        <input
          type="text"
          id="serviceRate"
          value={formInfo.services[0].serviceRate}
          onChange={(e) =>
            setFormInfo({
              ...formInfo,
              services: [
                {
                  ...formInfo.services[0],
                  serviceRate: e.target.value,
                },
              ],
            })
          }
        />

        <label htmlFor="serviceTotal">Service Total:</label>
        <input
          type="text"
          id="serviceTotal"
          value={formInfo.services[0].serviceTotal}
          onChange={(e) =>
            setFormInfo({
              ...formInfo,
              services: [
                {
                  ...formInfo.services[0],
                  serviceTotal: e.target.value,
                },
              ],
            })
          }
        />

        <label htmlFor="forServices">For Services:</label>
        <input
          type="text"
          id="forServices"
          value={formInfo.forServices}
          onChange={(e) => setFormInfo({ ...formInfo, forServices: e.target.value })}
        />

        <label htmlFor="servicesTotal">Services Total:</label>
        <input
          type="text"
          id="servicesTotal"
          value={formInfo.servicesTotal}
          onChange={(e) =>
            setFormInfo({ ...formInfo, servicesTotal: e.target.value })
          }
        />

        <button onClick={handleSubmit }>Submit</button>
      </form>

      
    </div>
  );
}

export default Page;