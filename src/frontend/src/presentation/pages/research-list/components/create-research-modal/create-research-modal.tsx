import React, { useState } from "react"
import Styles from "./create-research-modal.module.scss"
import { Box, TextField } from "@mui/material"
import ResearchService from "../../../../../data/services/researchService"

type Props = {
  close: () => void
}

const CreateResearchModal: React.FC<Props> = ({ close }: Props) => {
  const [data, setData] = useState({
    title: ''
  })

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    if (data.title) {
      try {
        await ResearchService.create(data)
      } catch (error) {
        console.log(error)
      }
      close()
    }
  }

  return (
    <form action="post" onSubmit={handleSubmit}>
      <div className={Styles.container}>

        <div className={Styles.textfield}>
          <Box
            sx={{
              maxWidth: '100%',
            }}
          >
            <TextField fullWidth label="Título" id="fullWidth" onChange={(e) => setData({ ...data, title: e.target.value })} />
          </Box>
        </div>
        <button type="submit" className={Styles.next}>Criar Pesquisa</button>
      </div>
    </form>
  )
}

export default CreateResearchModal
