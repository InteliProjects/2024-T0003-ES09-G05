import React from "react";
import Header from "../../components/header/header";
import Path from "../../components/path/path";
import Styles from './user-list.module.scss'
import UserTable from "./components/user-table/user-table";

const UserList: React.FC = () => {
  const path = [
    {
      title: "Usuário",
      url: "/userList"
    }
  ]
  return (
    <div className={Styles.userList}>
      <Header />
      <Path path={path} />
      <div className={Styles.container}>
        <div className={Styles.header}>
          <h1>Lista de usuários</h1>
        </div>
        <UserTable></UserTable>
      </div>
    </div>
  );
};

export default UserList;
