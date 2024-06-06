import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { FiEdit, FiEye } from "react-icons/fi";
import Styles from "./research-table.module.scss";
import { useNavigate } from "react-router-dom";

const data: any = [
  {
    title: "Pesquisa de Instalação de Software",
    createdAt: new Date().toLocaleDateString().split('T')[0],
    status: true,
  },
  {
    title: "Pesquisa da venda de cadernos",
    createdAt: new Date().toLocaleDateString().split('T')[0],
    status: true,
  },
  {
    title: "Pesquisa da venda de canetas",
    createdAt: new Date().toLocaleDateString().split('T')[0],
    status: false,
  },
  {
    title: "Pesquisa da venda de classificadores",
    createdAt: new Date().toLocaleDateString().split('T')[0],
    status: false,
  },
];

type Props = {
  researches: any
  edit: (data: any) => void
}

const ResearchTable: React.FC<Props> = ({ researches, edit }: Props) => {
  const navigate = useNavigate()

  return (
    <TableContainer className={Styles.table} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell data-testid='name'>Pesquisa</TableCell>
            <TableCell data-testid='created' align="right">Criado em</TableCell>
            <TableCell data-testid='status' align="right">Status</TableCell>
            <TableCell data-testid='action' align="right">Ação</TableCell>
          </TableRow>
        </TableHead>
        <TableBody data-testid="trBody">
          {researches && researches.length > 0 ? (
            researches.map((research: any) => (
              <TableRow key={research.id}>
                <TableCell component="th" scope="row">
                  {research.title}
                </TableCell>
                <TableCell align="right">{research.createdAt.toString()}</TableCell>
                <TableCell align="right">{research.status ? 'Ativo' : 'Desativado'}</TableCell>
                <TableCell align="right">
                  <div className={Styles.action}>
                    <FiEye data-testid='go-to-distribution' onClick={() => navigate('/distributionList',
                      {
                        state: {
                          research: research
                        }
                      }
                    )} size={20} />
                    <FiEdit size={20} onClick={() => edit(research)} />
                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell>Nenhuma pesquisa encontrada</TableCell>
            </TableRow>
          )}

        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ResearchTable