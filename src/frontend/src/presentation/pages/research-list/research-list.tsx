import React, { useEffect, useState } from "react";
import Styles from "./research-list.module.scss";
import Modal from "../../components/modal/modal";
import Header from "../../components/header/header";
import Path from "../../components/path/path";
import { FaPlus } from "react-icons/fa";
import ResearchTable from "./components/research-table/research-table";
import CreateResearchModal from "./components/create-research-modal/create-research-modal";
import UpdateResearchModal from "./components/update-research-modal/update-research-modal";
import ResearchService from "../../../data/services/researchService";

const ResearchList: React.FC = () => {
  const [openedCreate, setOpenedCreate] = useState(false);
  const [openedUpdate, setOpenedUpdate] = useState(false);
  const [actualResearch, setActualResearch] = useState({
    title: ''
  })
  const [researches, setResearches] = useState([])

  const handleCreate = () => {
    setOpenedCreate(false)
    getAll()
  }

  const handleUpdate = () => {
    handleClose()
    getAll()
  }

  const handleClose = () => {
    setOpenedUpdate(false)
    setActualResearch({
      title: ''
    })
  }


  const createContent = () => {
    return <CreateResearchModal close={() => handleCreate()} />
  };

  const updateContent = (data: any) => {
    console.log(data)
    return <UpdateResearchModal research={data} close={() => handleUpdate()} />
  }
  const path = [
    {
      title: "Início",
      url: "/"
    },
  ]

  const getAll = async () => {
    try {
      const data = await ResearchService.getAll()
      setResearches(data)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAll()
  }, [])

  useEffect(() => {
    if (actualResearch.title) {
      setOpenedUpdate(true)
    }
  }, [actualResearch])

  return (
    <div className={Styles.ResearchList}>
      {openedCreate && (
        <Modal
          testid="modal"
          title="Nova Pesquisa"
          content={createContent()}
          close={() => setOpenedCreate(!openedCreate)}
        />
      )}

      {openedUpdate && (
        <Modal
          testid="modal"
          title="Nova Pesquisa"
          content={updateContent(actualResearch)}
          close={() => handleClose()}
        />
      )}

      <Header />
      <Path path={path} />
      <div className={Styles.container}>
        <div className={Styles.header}>
          <h1>Todas as pesquisas</h1>
          <button data-testid='create-button' onClick={() => setOpenedCreate(true)}>
            Nova pesquisa <FaPlus size={14} />
          </button>
        </div>
        <ResearchTable researches={researches} edit={(data) => setActualResearch(data)}></ResearchTable>
      </div>
    </div>
  );
};

export default ResearchList;
