import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { FiEdit } from "react-icons/fi";
import Styles from "./distribution-table.module.scss";

type Props = {
  distributions: any
  edit: (data: any) => void
}

const DistributionTable: React.FC<Props> = ({distributions, edit}: Props) => {

  return (
    <TableContainer className={Styles.table} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell data-testid="name">Distribuição</TableCell>
            <TableCell data-testid="channel" align="right">
              Canal
            </TableCell>
            <TableCell data-testid="created" align="right">
              Criado em
            </TableCell>
            <TableCell data-testid="status" align="right">
              Status
            </TableCell>
            <TableCell data-testid="action" align="right">
              Ação
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {distributions && distributions.length > 0 ? (
            distributions.map((distribution: any) => (
              <TableRow key={distribution.id}>
                <TableCell component="th" scope="row">
                  {distribution.title}
                </TableCell>
                <TableCell align="right">{distribution.channel == 'email' ? 'E-mail' : 'Whatsapp'}</TableCell>
                <TableCell align="right">{distribution.createdAt.toString()}</TableCell>
                <TableCell align="right">{distribution.status ? 'Enviado' : 'Não enviado'}</TableCell>
                <TableCell align="right">
                  <FiEdit size={20} onClick={() => edit(distribution)} />
                  {/* <FiEdit size={20} onClick={() => edit({
                    title: distribution.title,
                    channel: distribution.channel == 'E-mail' ? 'email' : 'whatsapp'
                  })} /> */}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell>Nenhuma distribuição encontrada</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DistributionTable