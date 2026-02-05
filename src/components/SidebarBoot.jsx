import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";

export default function SidebarBoot() {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handleMenuClick = (e) => {
    const item = items
      .flatMap((i) => (i.children ? i.children : i))
      .find((i) => i.key === e.key);

    if (item?.path) {
      navigate(item.path);
    }
  };

  const items = [
    {
      key: "/paginainicial",
      icon: <PieChartOutlined />,
      label: "Página Inicial",
    },
    {
      label: "Receitas",
      icon: <MailOutlined />,
      children: [
        { key: "/receitas/salgadas", label: "Salgadas" },
        { key: "/receitas/doces", label: "Doces" },
        { key: "/receitas/Limitada", label: "Limitada" },
      ],
    },
    {
      key: "/sobre",
      label: "Sobre",
      icon: <AppstoreOutlined />,
    },
  ];

  return (
    <div
      style={{
        height: "100vh",
        width: collapsed ? 80 : 200,
        transition: "0.3s",
        background: "#062402",
        paddingTop: 20,
        alignItems: "center",
      }}
    >
      <div className="sidebar-logo">
        <img
          src="/favicon.ico"
          alt="Logo"
          style={{
            width: collapsed ? "50px" : "80px",
            padding: 5,
            transition: "width 0.3s ease-in-out",
          }}
        />
      </div>
      <Button
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
          backgroundColor: "#062402",
          color: "#fff",
          width: "auto",
        }}
        className="ms-1 d-flex align-itens--center justify-content-center"
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={["/paginainicial"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        inlineCollapsed={collapsed}
        items={items}
        onClick={(e) => navigate(e.key)}
        className="custom-menu shadow pe-1"
      />
    </div>
  );
}
