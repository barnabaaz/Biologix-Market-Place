import React from "react";
import styled from "styled-components";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import { Card as MuiCard } from "@mui/material";
const Container = styled.div`
  grid-area: main;
  overflow-y: auto;
  padding: 20px 20px;
  color: rgba(255, 255, 255, 0.95);
`;
const MainTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;
const MainCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  margin: 15px 0;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 10px;
    margin-bottom: 0;
  }
`;
const Card = styled(MuiCard)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 8px 15px;
  border-radius: 5px;

  /* 
  &:first-child {
    background-color: #2962ff;
  }
  &:nth-child(2) {
    background-color: #ff6d00;
  }

  &:nth-child(3) {
    background-color: #2e7d32;
  }

  &:nth-child(4) {
    background-color: #d50000;
  } */
`;
const CardInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const CardIcon = styled.i`
  font-size: 25px;
`;
const Chart = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 60px;
  height: 300px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-top: 30px;
  }
`;
const Home = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <>
      <MainTitle className="main-title">
        <h3>DASHBOARD</h3>
      </MainTitle>
      <MainCards className="main-cards">
        <Card className="card">
          <CardInner className="card-inner">
            <h4>PRODUCTS</h4>
            <CardIcon>
              <BsFillArchiveFill className="card_icon" />
            </CardIcon>
          </CardInner>
          <h2>300</h2>
        </Card>
        <Card className="card">
          <CardInner className="card-inner">
            <h4>CATEGORIES</h4>
            <CardIcon>
              <BsFillGrid3X3GapFill className="card_icon" />
            </CardIcon>
          </CardInner>
          <h2>12</h2>
        </Card>
        <Card className="card">
          <CardInner className="card-inner">
            <h4>CUSTOMERS</h4>
            <CardIcon>
              <BsPeopleFill className="card_icon" />
            </CardIcon>
          </CardInner>
          <h2>33</h2>
        </Card>
        <Card className="card">
          <CardInner className="card-inner">
            <h4>APPROVALS</h4>
            <CardIcon>
              <BsFillBellFill className="card_icon" />
            </CardIcon>
          </CardInner>
          <h2>42</h2>
        </Card>
      </MainCards>

      <Chart>
        <MuiCard sx={{ padding: 2 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </MuiCard>
        <MuiCard sx={{ padding: 2 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </MuiCard>
      </Chart>
    </>
  );
};

export default Home;
