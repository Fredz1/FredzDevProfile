"use client"


import { useState, useEffect } from 'react';
import style from './invoiceStyle.module.scss';
import createPDF from './createPDF';

const Page = () => {

  let services = [
    {
      serviceDescription: 'Fred',
      serviceDate: '24 June 2021',
      serviceHours: '1',
      serviceTotal: 150,
    },
  ]
  
  
  /* ID, Details, Date, Hours Amount */
  


  const invoiceInfo = {
    invoiceNumber: '',
    month: '',
    date: '',
    phone: '',
    billTo: {
      receiverName: '',
      attentionName: '',
      receiverAddress: '',
      receiverPhone: '',
      receiverEmail: '',
    },
    forServices: '',
    servicesTotal: '',
  }

  const [formInfo, setFormInfo] = useState(invoiceInfo)
  const [pdfUrl, setPdfUrl] = useState(null)
  const [serviceList, setServiceList] = useState(services)

  const handleSubmit = async e => {
    e.preventDefault()

    const response = await createPDF(formInfo, serviceList)
    
    setPdfUrl(response)
  }

  return (
    <div className={ style.page } >
      <div className={ style.lineItems }>
        <h1>Line Items</h1>
        {/* Details, Date, Hours Amount */ }
        <table  >
          <thead>
            <tr>
              <th>Service Description</th>
              <th>Date</th>
              <th>Hours</th>
              <th>Total</th>
              <th>Del</th>
            </tr>
          </thead>
          <tbody>
            {serviceList.map((service, index) => (
              <tr key={`lineItem-${index}`}>
                <td>
                  <input
                    type="text"
                    placeholder="Service Description"
                    value={ service.serviceDescription }
                    onChange={
                      e => {
                        service.serviceDescription = e.target.value
                        setServiceList([...serviceList])
                      }
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Date"
                    value={ service.serviceDate }
                    onChange={
                      e => {
                        service.serviceDate = e.target.value
                        setServiceList([...serviceList])
                      }
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Hours"
                    value={ service.serviceHours }
                    onChange={
                      e => {
                        service.serviceHours = e.target.value
                        setServiceList([...serviceList])
                      }
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Total"
                    value={ service.serviceTotal }
                    onChange={
                      e => {
                        service.serviceTotal = e.target.value
                        setServiceList([...serviceList])
                      }
                    }
                  />
                </td>
                <td>
                  <button
                    onClick={
                      e =>
                        {
                          setServiceList(serviceList.filter((item, i) => i !== index))
                        }
                  }>
                    X
                  </button>

                </td>
              </tr>
            )) }
            <tr>
              
            </tr>
          </tbody>
        </table>
        <button
            onClick={
              e => {
                setServiceList([...serviceList, {
                  serviceDescription: '',
                  serviceDate: '',
                  serviceHours: '',
                  serviceTotal: 0,
                }])
              }
            }
          >
            Add new Line
          </button>
        
      </div>

      <div className={style.invoiceInput}>
        <form>
          <h1>Invoice Page</h1>
          <label htmlFor="invoiceNumber">Invoice Number:</label>
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

          <label htmlFor="phone">Phone Number:</label>
          <input
            type="text"
            id="phone"
            value={formInfo.phone}
            onChange={(e) => setFormInfo({ ...formInfo, phone: e.target.value })}
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

          

          <label htmlFor="forServices">For Services:</label>
          <input
            type="text"
            id="forServices"
            value={formInfo.forServices}
            onChange={(e) => setFormInfo({ ...formInfo, forServices: e.target.value })}
          />

          <button onClick={handleSubmit }>Submit</button>
        </form>

      </div>

      

      <div>
        {pdfUrl && (
          <iframe
            src={pdfUrl}
            title="Invoice PDF"
            style={{ width: '100%', height: '100%' }}
          />
        )}
      </div>
    </div>
  );
}

export default Page;