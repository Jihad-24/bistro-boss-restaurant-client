import { useState } from "react";
import orderImg from "../../../assets/shop/order.jpg";
import CoverSection from "../../Shared/Cover/CoverSection";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrdeTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
    const categorys = ['salad', 'pizza', 'soups', 'desserts', 'drinks'];
    const { category } = useParams();
    const intialIndex = categorys.indexOf(category)
    const [tabIndex, setTabIndex] = useState(intialIndex);
    const [menu] = useMenu();
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const soups = menu.filter(item => item.category === 'soup')
    const desserts = menu.filter(item => item.category === 'dessert')
    const drinks = menu.filter(item => item.category === 'drinks')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>
            <CoverSection
                bgImg={orderImg}
                title={"Order food"}
                subTitle={"Would you like to try a dish?"}
            ></CoverSection>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soups}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={desserts} ></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks} ></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;