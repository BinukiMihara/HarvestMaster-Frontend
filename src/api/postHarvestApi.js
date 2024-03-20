import axios from "axios";

const URL = "http://localhost:8080";

export const addPostHarvestPlan = async (planData) => {
  const response = await axios.post(`${URL}/postharvest/add`, {
    fieldName: planData.fieldName,
    regNo: planData.regNo,
    paddyVareity: planData.variety,
    area: planData.area,
    ownership: planData.ownership,
    location: planData.location,
    plantedDate: planData.date,
    split: planData.harvestsplit,
    method: planData.method,
  });
  return response;
};

export const getAllPostHarvestPlans = async () => {
  const farmer_id = 1;
  const response = await axios.get(`${URL}/postharvest/all/${farmer_id}`);

  return response.data;
};

export const getPostHarvestPlan = async () => {
  const plan_id = 3;
  const response = await axios.get(`${URL}/postharvest/get/${plan_id}`);

  return response.data;
};

export const getAvailableBid = async (paddystock_id) => {
  const response = await axios.get(`${URL}/bid/getallbids/${paddystock_id}`);

  return response.data;
};

export const getPaddyStock = async (plan_id) => {
  const response = await axios.get(`${URL}/paddystock/get/${plan_id}`);

  return response.data;
};

export const addPaddyStock = async (fieldid,paddyStock) => {
  const response = await axios.post(`${URL}/paddystock/add/${fieldid}`, {
    
    price: paddyStock.price,
    amount: paddyStock.amount,
    status: "ACTIVE",
  });
  return response;
};
