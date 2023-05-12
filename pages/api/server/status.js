

const handler = (req, res) => {

  res.status(200)
	.json(
		{
			errorMessage: null,
			data: true,
			cpu: 65,
			ram: 60, 
		}
	)
}

export default handler