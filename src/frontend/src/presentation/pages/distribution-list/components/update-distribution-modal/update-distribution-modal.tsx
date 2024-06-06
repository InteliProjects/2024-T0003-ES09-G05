import React, { useState } from "react"
import Styles from "./update-distribution-modal.module.scss"
import { Box, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { FaFile, FaFileUpload } from "react-icons/fa"

import { CSVLink } from "react-csv"
import { FileUploader } from "react-drag-drop-files"
import DistributionService from "../../../../../data/services/distributionService"

type Option = {
  label: string
  value: string
}

type Props = {
  distribution: any,
  data: { name: string, defaultValue: string, options: Option[] }
  close: () => void
}

const UpdateDistributionModal: React.FC<Props> = ({ distribution, data }: Props) => {
  const [channel, setChannel] = useState(distribution.channel);
  const [title, setTitle] = useState(distribution.title)
  const [file, setFile] = useState<File>();

  const csvData = [
    ["name", "contact"],
  ]

  const fileTypes = ["CSV", "xlsx"]

  const handleChange = (file: File) => {
    setFile(file);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    
    try {
      console.log(distribution)
      const formData = new FormData();
      formData.append("file", file);
      formData.append("researchId", distribution.researchId);
      formData.append("distributionId", distribution.id);
      formData.append("channel", channel);
      formData.append("title", title)
      const response = await DistributionService.create(formData);
      console.log(response);
      close();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form action="post" onSubmit={handleSubmit}>
      <p>
        Faça download da planilha modelo, preencha com os dados dos clientes e
        faça upload da planilha aqui.
      </p>

      <div className={Styles.selectContainer}>
        <InputLabel
          className={Styles.selectLabel}
          variant="filled"
          htmlFor="distribution"
        >
          {data.name}
        </InputLabel>

        <Select
          className={Styles.select}
          data-testid='distribution-type'
          id="distribution"
          disabled={true}
          defaultValue={channel}
          onChange={(e) => setChannel(e.target.value)}
        >
          {data.options.map((option: Option) => (
            <MenuItem
              className={Styles.option}
              value={option.value}
              key={option.label}
            >
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </div>

      <Box
        sx={{
          maxWidth: "100%",
        }}
      >
        <TextField
          fullWidth
          label="Título"
          id="fullWidth"
          onChange={(e) => setTitle(e.target.value)}
        />
      </Box>

      <div className={Styles.filesContainer}>
        <div className={Styles.download}>
          <div className={Styles.col}>
            <div className={Styles.header}>
              <FaFile size={32} />
              <h3>Planilha modelo</h3>
            </div>

            <p>Clique no botão para baixar o arquivo.</p>
          </div>

          <div className={Styles.col}>
            <CSVLink data-testid='download' filename="Planilha modelo" data={csvData} target="_blank">
              <button className={Styles.button}>Download</button>
            </CSVLink>

          </div>
        </div>

        <div className={Styles.upload}>
          <FileUploader
            data-testid='upload-draggable'
            handleChange={handleChange}
            multiple={false}
            name="file"
            types={fileTypes}
            disabled
          >
            <div className={Styles.container}>
              <FaFileUpload size={32} />
              <p>Apenas documentos com no máximo 5mb, no formato .csv ou .xlsx</p>

              <div data-testid='upload-default'>
                <FileUploader
                  handleChange={handleChange}
                  multiple={false}
                  name="file"
                  types={fileTypes}
                >
                  <span className={Styles.uploadInput}>Clique aqui para subir</span>
                </FileUploader>
                <span> ou arraste aqui.</span>
              </div>
            </div>
          </FileUploader>
        </div>
      </div>

      {
        file && (
          <div data-testid='uploaded-file' className={Styles.fileUploaded}>
            <FaFile size={32} />
            <div className={Styles.container}>
              <p className={Styles.name}>
                {file.name}
              </p>
              <p className={Styles.description}>
                {file.size} KB - 100% carregado.
              </p>
            </div>
          </div>
        )
      }

      <hr className={Styles.line} />

      <button type="submit" className={Styles.next}>
        Continuar
      </button>
    </form>
  )
}

export default UpdateDistributionModal
