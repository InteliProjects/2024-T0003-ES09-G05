import React, { useState } from "react"
import Styles from "./update-research-modal.module.scss"
import { Box, TextField } from "@mui/material"
import ResearchService from "../../../../../data/services/researchService"

type Props = {
  research: any
  close: () => void
}

const UpdateResearchModal: React.FC<Props> = ({ research, close }: Props) => {
  const [data, setData] = useState(research)

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    if (data.title) {
      try {
        await ResearchService.update(data)
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
            <TextField fullWidth value={data.title} label="Título" id="fullWidth" onChange={(e) => setData({ ...data, title: e.target.value })} />
          </Box>
        </div>
        <button type="submit" className={Styles.next}>Atualizar Pesquisa</button>
      </div>
    </form>
  )
}

export default UpdateResearchModal
