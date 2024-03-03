export interface IOrder {
  id: number;
  user: IUser;
  createdAt: string;
  status: IOrderStatus;
  adress: IAddress;
  amount: number;
}

export interface IUser {
  id: number;
  fullName: string;
  gender: string;
  gsm: string;
  createdAt: string;
  addresses: IAddress[];
}

export interface IOrderStatus {
  id: number;
  text: "Pending" | "Ready" | "On The Way" | "Delivered" | "Cancelled";
}

export interface IAddress {
  text: string;
  coordinate: [string, string];
}

export interface IChartDatum {
  date: string;
  value: string;
}

export interface IChart {
  data: IChartDatum[];
  total: number;
  trend: number;
}

export interface IProduct {
  id: number;
  name: string;
  isActive: boolean;
  description: string;
  createdAt: string;
  price: number;
  category: ICategory;
  stock: number;
}

export interface ICategory {
  id: number;
  title: string;
  isActive: boolean;
}

export type TTab = {
  id: number;
  label: string;
  content: JSX.Element;
};

export interface DashboardData {
  date: string;
  uv: number;
  pv: number;
}

export interface StatsProps {
  showDashBoard: boolean;
  setShowDashBoard: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface DashboardSectionProps {
  currDashboardData: DashboardData[];
  setCurrDashboardData: React.Dispatch<React.SetStateAction<DashboardData[]>>;
  showDashBoard: boolean;
}

export interface DateRangePickerProps {
  currDashboardData: DashboardData[];
  setCurrDashboardData: React.Dispatch<React.SetStateAction<DashboardData[]>>;
}

export interface SingleDateRangePickerProps {
  colorCode: string;
  dateObj: {
    start: string;
    end: string;
  };
  selectStartdateFunc: (date: string) => void;
  selectEndDateFunc: (date: string) => void;
}
