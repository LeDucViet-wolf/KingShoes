import React from "react"
import { Redirect } from "react-router-dom"

// Pages Component
import Chat from "../pages/Chat/Chat"

// File Manager
import FileManager from "../pages/FileManager/index"

// Profile
import UserProfile from "../pages/Authentication/user-profile"

// Pages Calendar
import Calendar from "../pages/Calendar/index"

// //Tasks
import TasksList from "../pages/Tasks/tasks-list"
import TasksKanban from "../pages/Tasks/tasks-kanban"
import TasksCreate from "../pages/Tasks/tasks-create"

// //Projects
import ProjectsGrid from "../pages/Projects/projects-grid"
import ProjectsList from "../pages/Projects/projects-list"
import ProjectsOverview from "../pages/Projects/ProjectOverview/projects-overview"
import ProjectsCreate from "../pages/Projects/projects-create"

// //Ecommerce Pages
import EcommerceProducts from "../pages/Ecommerce/EcommerceProducts/index"
import EcommerceProductDetail from "../pages/Ecommerce/EcommerceProducts/EcommerceProductDetail"
import EcommerceOrders from "../pages/Ecommerce/EcommerceOrders/index"
import EcommerceCustomers from "../pages/Ecommerce/EcommerceCustomers/index"
import EcommerceCart from "../pages/Ecommerce/EcommerceCart"
import EcommerceCheckout from "../pages/Ecommerce/EcommerceCheckout"
import EcommerceShops from "../pages/Ecommerce/EcommerceShops/index"
import EcommerceAddProduct from "../pages/Ecommerce/EcommerceAddProduct"

//Email
import EmailInbox from "../pages/Email/email-inbox"
import EmailRead from "../pages/Email/email-read"
import EmailBasicTemplte from "../pages/Email/email-basic-templte"
import EmailAlertTemplte from "../pages/Email/email-template-alert"
import EmailTemplateBilling from "../pages/Email/email-template-billing"

//Invoices
import InvoicesList from "../pages/Invoices/invoices-list"
import InvoiceDetail from "../pages/Invoices/invoices-detail"

// Authentication related pages
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"

//  // Inner Authentication
import Login1 from "../pages/AuthenticationInner/Login"
import Login2 from "../pages/AuthenticationInner/Login2"
import Register1 from "../pages/AuthenticationInner/Register"
import Register2 from "../pages/AuthenticationInner/Register2"
import Recoverpw from "../pages/AuthenticationInner/Recoverpw"
import Recoverpw2 from "../pages/AuthenticationInner/Recoverpw2"
import ForgetPwd1 from "../pages/AuthenticationInner/ForgetPassword"
import ForgetPwd2 from "../pages/AuthenticationInner/ForgetPassword2"
import LockScreen from "../pages/AuthenticationInner/auth-lock-screen"
import LockScreen2 from "../pages/AuthenticationInner/auth-lock-screen-2"
import ConfirmMail from "../pages/AuthenticationInner/page-confirm-mail"
import ConfirmMail2 from "../pages/AuthenticationInner/page-confirm-mail-2"
import EmailVerification from "../pages/AuthenticationInner/auth-email-verification"
import EmailVerification2 from "../pages/AuthenticationInner/auth-email-verification-2"
import TwostepVerification from "../pages/AuthenticationInner/auth-two-step-verification"
import TwostepVerification2 from "../pages/AuthenticationInner/auth-two-step-verification-2"

// Dashboard
import Dashboard from "../pages/Dashboard/index"
import DashboardSaas from "../pages/Dashboard-saas/index"
import DashboardCrypto from "../pages/Dashboard-crypto/index"
import Category from "../pages/Category/index"

//Crypto
import CryptoWallet from "../pages/Crypto/CryptoWallet/crypto-wallet"
import CryptoBuySell from "../pages/Crypto/crypto-buy-sell"
import CryptoExchange from "../pages/Crypto/crypto-exchange"
import CryptoLending from "../pages/Crypto/crypto-lending"
import CryptoOrders from "../pages/Crypto/CryptoOrders/crypto-orders"
import CryptoKYCApplication from "../pages/Crypto/crypto-kyc-application"
import CryptoIcoLanding from "../pages/Crypto/CryptoIcoLanding/index"

// Charts
import ChartApex from "../pages/Charts/Apexcharts"
import ChartistChart from "../pages/Charts/ChartistChart"
import ChartjsChart from "../pages/Charts/ChartjsChart"
import EChart from "../pages/Charts/EChart"
import SparklineChart from "../pages/Charts/SparklineChart"
import ChartsKnob from "../pages/Charts/charts-knob"
import ReCharts from "../pages/Charts/ReCharts"

// Maps
import MapsGoogle from "../pages/Maps/MapsGoogle"
import MapsVector from "../pages/Maps/MapsVector"
import MapsLeaflet from "../pages/Maps/MapsLeaflet"

//Icons
import IconBoxicons from "../pages/Icons/IconBoxicons"
import IconDripicons from "../pages/Icons/IconDripicons"
import IconMaterialdesign from "../pages/Icons/IconMaterialdesign"
import IconFontawesome from "../pages/Icons/IconFontawesome"

//Tables
import BasicTables from "../pages/Tables/BasicTables"
import DatatableTables from "../pages/Tables/DatatableTables"
import ResponsiveTables from "../pages/Tables/ResponsiveTables"
import EditableTables from "../pages/Tables/EditableTables"
import DragDropTables from "../pages/Tables/DragDropTables"

//Blog
import BlogList from "../pages/Blog/BlogList/index"
import BlogGrid from "../pages/Blog/BlogGrid/index"
import BlogDetails from "../pages/Blog/BlogDetails"

// Forms
import FormElements from "../pages/Forms/FormElements"
import FormLayouts from "../pages/Forms/FormLayouts"
import FormAdvanced from "../pages/Forms/FormAdvanced"
import FormEditors from "../pages/Forms/FormEditors"
import FormValidations from "../pages/Forms/FormValidations"
import FormMask from "../pages/Forms/FormMask"
import FormRepeater from "../pages/Forms/FormRepeater"
import FormUpload from "../pages/Forms/FormUpload"
import FormWizard from "../pages/Forms/FormWizard"
import FormXeditable from "../pages/Forms/FormXeditable"
import DualListbox from "../pages/Tables/DualListbox"

//Ui
import UiAlert from "../pages/Ui/UiAlert"
import UiButtons from "../pages/Ui/UiButtons"
import UiCards from "../pages/Ui/UiCards"
import UiCarousel from "../pages/Ui/UiCarousel"
import UiColors from "../pages/Ui/UiColors"
import UiDropdown from "../pages/Ui/UiDropdown"
import UiGeneral from "../pages/Ui/UiGeneral"
import UiGrid from "../pages/Ui/UiGrid"
import UiImages from "../pages/Ui/UiImages"
import UiLightbox from "../pages/Ui/UiLightbox"
import UiModal from "../pages/Ui/UiModal"
import UiProgressbar from "../pages/Ui/UiProgressbar"
import UiTabsAccordions from "../pages/Ui/UiTabsAccordions"
import UiTypography from "../pages/Ui/UiTypography"
import UiVideo from "../pages/Ui/UiVideo"
import UiSessionTimeout from "../pages/Ui/UiSessionTimeout"
import UiRating from "../pages/Ui/UiRating"
import UiRangeSlider from "../pages/Ui/UiRangeSlider"
import UiNotifications from "../pages/Ui/ui-notifications"
import UiOffCanvas from "pages/Ui/UiOffCanvas"
import UiBreadcrumb from "../pages/Ui/UiBreadcrumb"
import UiPlaceholders from "../pages/Ui/UiPlaceholders"
import UiToasts from "../pages/Ui/UiToast"

//Pages
import PagesStarter from "../pages/Utility/pages-starter"
import PagesMaintenance from "../pages/Utility/pages-maintenance"
import PagesComingsoon from "../pages/Utility/pages-comingsoon"
import PagesTimeline from "../pages/Utility/pages-timeline"
import PagesFaqs from "../pages/Utility/pages-faqs"
import PagesPricing from "../pages/Utility/pages-pricing"
import Pages404 from "../pages/Utility/pages-404"
import Pages500 from "../pages/Utility/pages-500"
import AllProducts from "../pages/Products/index"
import RelatedProducts from "../pages/ProductRelated/index"


//Contacts
import ContactsGrid from "../pages/Users/contacts-grid"
import ContactsList from "../pages/Users/UsersList/Users-list"
import ContactsProfile from "../pages/Users/UsersProfile/contacts-profile"
import Newsletter from "pages/Newsletter/newsletter_list"
import Poll from "pages/Poll/poll_list"
import Contracts from "pages/Contracts/Contracts"
import Certificate from "pages/certificate"
import config from "pages/config/config"
import Order from "pages/Order"
import Ship from "pages/Ship-method"
import Payment from "pages/payment"

const authProtectedRoutes = [
  {
    path: process.env.REACT_APP_SECURITY_URL + "/dashboard",
    component: Dashboard,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/dashboard-saas",
    component: DashboardSaas,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/dashboard-crypto",
    component: DashboardCrypto,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/transaction",
    component: EcommerceOrders,
  },
  { path: process.env.REACT_APP_SECURITY_URL + "/category", component: Category },
  { path: process.env.REACT_APP_SECURITY_URL + "/newsletter", component: Newsletter },
  { path: process.env.REACT_APP_SECURITY_URL + "/poll", component: Poll },
  { path: process.env.REACT_APP_SECURITY_URL + "/products", component: AllProducts },
  { path: process.env.REACT_APP_SECURITY_URL + "/products-related", component: RelatedProducts },
  { path: process.env.REACT_APP_SECURITY_URL + "/contracts", component: Contracts },
  { path: process.env.REACT_APP_SECURITY_URL + "/system", component: config },
  { path: process.env.REACT_APP_SECURITY_URL + "/order", component: Order },
  { path: process.env.REACT_APP_SECURITY_URL + "/ship", component: Ship },
  { path: process.env.REACT_APP_SECURITY_URL + "/payment", component: Payment },



  { path: process.env.REACT_APP_SECURITY_URL + "/certificate", component: Certificate },
  //Crypto
  {
    path: process.env.REACT_APP_SECURITY_URL + "/crypto-wallet",
    component: CryptoWallet,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/crypto-buy-sell",
    component: CryptoBuySell,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/crypto-exchange",
    component: CryptoExchange,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/crypto-lending",
    component: CryptoLending,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/crypto-orders",
    component: CryptoOrders,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/crypto-kyc-application",
    component: CryptoKYCApplication,
  },

  //chat
  { path: process.env.REACT_APP_SECURITY_URL + "/chat", component: Chat },

  //File Manager
  {
    path: process.env.REACT_APP_SECURITY_URL + "/apps-filemanager",
    component: FileManager,
  },

  // //calendar
  {
    path: process.env.REACT_APP_SECURITY_URL + "/calendar",
    component: Calendar,
  },

  // //profile
  {
    path: process.env.REACT_APP_SECURITY_URL + "/profile",
    component: UserProfile,
  },

  //Ecommerce
  {
    path: process.env.REACT_APP_SECURITY_URL + "/ecommerce-product-detail/:id",
    component: EcommerceProductDetail,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/ecommerce-products",
    component: EcommerceProducts,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/ecommerce-orders",
    component: EcommerceOrders,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/ecommerce-customers",
    component: EcommerceCustomers,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/ecommerce-cart",
    component: EcommerceCart,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/ecommerce-checkout",
    component: EcommerceCheckout,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/ecommerce-shops",
    component: EcommerceShops,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/ecommerce-add-product",
    component: EcommerceAddProduct,
  },

  //Email
  {
    path: process.env.REACT_APP_SECURITY_URL + "/email-inbox",
    component: EmailInbox,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/email-read",
    component: EmailRead,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/email-template-basic",
    component: EmailBasicTemplte,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/email-template-alert",
    component: EmailAlertTemplte,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/email-template-billing",
    component: EmailTemplateBilling,
  },

  //Invoices
  {
    path: process.env.REACT_APP_SECURITY_URL + "/invoices-list",
    component: InvoicesList,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/invoices-detail/:id?",
    component: InvoiceDetail,
  },

  // Tasks
  {
    path: process.env.REACT_APP_SECURITY_URL + "/tasks-list",
    component: TasksList,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/tasks-kanban",
    component: TasksKanban,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/tasks-create",
    component: TasksCreate,
  },

  //Projects
  {
    path: process.env.REACT_APP_SECURITY_URL + "/projects-grid",
    component: ProjectsGrid,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/projects-list",
    component: ProjectsList,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/projects-overview",
    component: ProjectsOverview,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/projects-overview/:id",
    component: ProjectsOverview,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/projects-create",
    component: ProjectsCreate,
  },

  //Blog
  {
    path: process.env.REACT_APP_SECURITY_URL + "/blog-list",
    component: BlogList,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/blog-grid",
    component: BlogGrid,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/blog-details",
    component: BlogDetails,
  },

  // Contacts
  {
    path: process.env.REACT_APP_SECURITY_URL + "/contacts-grid",
    component: ContactsGrid,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/user",
    component: ContactsList,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/contacts-profile",
    component: ContactsProfile,
  },

  //Charts
  {
    path: process.env.REACT_APP_SECURITY_URL + "/apex-charts",
    component: ChartApex,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/chartist-charts",
    component: ChartistChart,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/chartjs-charts",
    component: ChartjsChart,
  },
  { path: process.env.REACT_APP_SECURITY_URL + "/e-charts", component: EChart },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/sparkline-charts",
    component: SparklineChart,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/charts-knob",
    component: ChartsKnob,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/re-charts",
    component: ReCharts,
  },

  // Icons
  {
    path: process.env.REACT_APP_SECURITY_URL + "/icons-boxicons",
    component: IconBoxicons,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/icons-dripicons",
    component: IconDripicons,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/icons-materialdesign",
    component: IconMaterialdesign,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/icons-fontawesome",
    component: IconFontawesome,
  },

  // Tables
  {
    path: process.env.REACT_APP_SECURITY_URL + "/tables-basic",
    component: BasicTables,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/tables-datatable",
    component: DatatableTables,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/tables-responsive",
    component: ResponsiveTables,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/tables-editable",
    component: EditableTables,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/tables-dragndrop",
    component: DragDropTables,
  },

  // Maps
  {
    path: process.env.REACT_APP_SECURITY_URL + "/maps-google",
    component: MapsGoogle,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/maps-vector",
    component: MapsVector,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/maps-leaflet",
    component: MapsLeaflet,
  },

  // Forms
  {
    path: process.env.REACT_APP_SECURITY_URL + "/form-elements",
    component: FormElements,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/form-layouts",
    component: FormLayouts,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/form-advanced",
    component: FormAdvanced,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/form-editors",
    component: FormEditors,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/form-mask",
    component: FormMask,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/form-repeater",
    component: FormRepeater,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/form-uploads",
    component: FormUpload,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/form-wizard",
    component: FormWizard,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/form-validation",
    component: FormValidations,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/form-xeditable",
    component: FormXeditable,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/dual-listbox",
    component: DualListbox,
  },

  // Ui
  {
    path: process.env.REACT_APP_SECURITY_URL + "/ui-alerts",
    component: UiAlert,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/ui-buttons",
    component: UiButtons,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/ui-cards",
    component: UiCards,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/ui-carousel",
    component: UiCarousel,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/ui-colors",
    component: UiColors,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/ui-dropdowns",
    component: UiDropdown,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/ui-general",
    component: UiGeneral,
  },
  { path: process.env.REACT_APP_SECURITY_URL + "/ui-grid", component: UiGrid },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/ui-images",
    component: UiImages,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/ui-lightbox",
    component: UiLightbox,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/ui-modals",
    component: UiModal,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/ui-progressbars",
    component: UiProgressbar,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/ui-tabs-accordions",
    component: UiTabsAccordions,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/ui-typography",
    component: UiTypography,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/ui-video",
    component: UiVideo,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/ui-session-timeout",
    component: UiSessionTimeout,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/ui-rating",
    component: UiRating,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/ui-rangeslider",
    component: UiRangeSlider,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/ui-notifications",
    component: UiNotifications,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/ui-offcanvas",
    component: UiOffCanvas,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/ui-breadcrumb",
    component: UiBreadcrumb,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/ui-placeholders",
    component: UiPlaceholders,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/ui-toasts",
    component: UiToasts,
  },

  //Utility
  {
    path: process.env.REACT_APP_SECURITY_URL + "/pages-starter",
    component: PagesStarter,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/pages-timeline",
    component: PagesTimeline,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/pages-faqs",
    component: PagesFaqs,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/pages-pricing",
    component: PagesPricing,
  },

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  {
    path: process.env.REACT_APP_SECURITY_URL + "/",
    exact: true,
    component: () => (
      <Redirect to={process.env.REACT_APP_SECURITY_URL + "/dashboard"} />
    ),
  },
]

const publicRoutes = [
  { path: process.env.REACT_APP_SECURITY_URL + "/logout", component: Logout },
  { path: process.env.REACT_APP_SECURITY_URL + "/login", component: Login },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/forgot-password",
    component: ForgetPwd,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/register",
    component: Register,
  },

  {
    path: process.env.REACT_APP_SECURITY_URL + "/pages-maintenance",
    component: PagesMaintenance,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/pages-comingsoon",
    component: PagesComingsoon,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/pages-404",
    component: Pages404,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/pages-500",
    component: Pages500,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/crypto-ico-landing",
    component: CryptoIcoLanding,
  },

  // Authentication Inner
  {
    path: process.env.REACT_APP_SECURITY_URL + "/pages-login",
    component: Login1,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/pages-login-2",
    component: Login2,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/pages-register",
    component: Register1,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/pages-register-2",
    component: Register2,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/page-recoverpw",
    component: Recoverpw,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/page-recoverpw-2",
    component: Recoverpw2,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/pages-forgot-pwd",
    component: ForgetPwd1,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/auth-recoverpw-2",
    component: ForgetPwd2,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/auth-lock-screen",
    component: LockScreen,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/auth-lock-screen-2",
    component: LockScreen2,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/page-confirm-mail",
    component: ConfirmMail,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/page-confirm-mail-2",
    component: ConfirmMail2,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/auth-email-verification",
    component: EmailVerification,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/auth-email-verification-2",
    component: EmailVerification2,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/auth-two-step-verification",
    component: TwostepVerification,
  },
  {
    path: process.env.REACT_APP_SECURITY_URL + "/auth-two-step-verification-2",
    component: TwostepVerification2,
  },
]

export { authProtectedRoutes, publicRoutes }
