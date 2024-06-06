import React, { useEffect, useState } from "react";
import Styles from "./distribution-list.module.scss";
import Modal from "../../components/modal/modal";
import Header from "../../components/header/header";
import Path from "../../components/path/path";
import { FaPlus } from "react-icons/fa";
import DistributionTable from "./components/distribution-table/distribution-table";
import CreateDistributionModal from "./components/create-distribution-modal/create-distribution-modal";
import UpdateDistributionModal from "./components/update-distribution-modal/update-distribution-modal";
import { useLocation } from "react-router-dom";
import DistributionService from "../../../data/services/distributionService";

const DistributionList: React.FC = () => {
  const [openedCreate, setOpenedCreate] = useState(false);
  const [openedUpdate, setOpenedUpdate] = useState(false);
  const [distributions, setDistributions] = useState([])
  const [actualDistribution, setActualDistribution] = useState({
    title: '',
    channel: ''
  })

  const location = useLocation();
  const research = location.state.research;

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
    setActualDistribution({
      channel: '',
      title: ''
    })
  }

  const createContent = () => {
    const modalContent = {
      researchId: research.id,
      name: "Canal de distribuição",
      defaultValue: "email",
      disabled: false,
      options: [
        {
          label: "E-mail",
          value: "email",
        },
        {
          label: "Whatsapp",
          value: "whatsapp",
        },
      ],
    }
    return <CreateDistributionModal data={modalContent} close={() => handleCreate()} />
  };

  const updateContent = (distribution: any) => {
    const modalContent = {
      name: distribution.title,
      defaultValue: distribution.channel,
      options: [
        {
          label: "E-mail",
          value: "email",
        },
        {
          label: "Whatsapp",
          value: "whatsapp",
        },
      ],
    }
    return <UpdateDistributionModal distribution={distribution} data={modalContent} close={() => handleUpdate()} />
  }

  const path = [
    {
      title: "Início",
      url: "/"
    },
    {
      title: "Distribuição",
      url: "/distributionList"
    }
  ]

  const getAll = async () => {
    try {
      const data = await DistributionService.getAll()
      setDistributions(data)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAll()
  }, [])

  useEffect(() => {
    console.log(actualDistribution)
    if (actualDistribution.channel) {
      setOpenedUpdate(true)
    }
  }, [actualDistribution])

  return (
    <div className={Styles.distributionList}>
      {openedCreate && (
        <Modal
          testid="modal"
          title="Nova distribuição"
          content={createContent()}
          close={() => setOpenedCreate(!openedCreate)}
        />
      )}

      {openedUpdate && (
        <Modal
          testid="modal"
          title={actualDistribution.title}
          content={updateContent(actualDistribution)}
          close={() => handleClose()}
        />
      )}

      <Header />
      <Path path={path} />
      <div className={Styles.container}>
        <div className={Styles.header}>
          <h1>{research && research.title}</h1>
          <button data-testid='create-button' onClick={() => setOpenedCreate(true)}>
            Nova distribuição <FaPlus size={14} />
          </button>
        </div>
        <DistributionTable distributions={distributions} edit={(data) => setActualDistribution(data)}></DistributionTable>
      </div>
    </div>
  );
};

export default DistributionList;
