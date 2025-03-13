import React from 'react';
import App from 'App';
import paths, { rootPaths } from './paths';
import { Navigate, createBrowserRouter } from 'react-router-dom';

import AuthSimpleLayout from '../layouts/AuthSimpleLayout';
import MainLayout from '../layouts/MainLayout';
import ErrorLayout from '../layouts/ErrorLayout';
import WizardAuth from 'components/authentication/wizard/WizardAuth';
import Landing from 'components/pages/landing/Landing';
import Accordion from 'components/doc-components/Accordion';
import Alerts from 'components/doc-components/Alerts';
import Badges from 'components/doc-components/Badges';
import Breadcrumbs from 'components/doc-components/Breadcrumb';
import Buttons from 'components/doc-components/Buttons';
import CalendarExample from 'components/doc-components/CalendarExample';
import Cards from 'components/doc-components/Cards';
import Dropdowns from 'components/doc-components/Dropdowns';
import ListGroups from 'components/doc-components/ListGroups';
import Modals from 'components/doc-components/Modals';
import Offcanvas from 'components/doc-components/Offcanvas';
import Pagination from 'components/doc-components/Pagination';
import BasicProgressBar from 'components/doc-components/ProgressBar';
import Spinners from 'components/doc-components/Spinners';
import Toasts from 'components/doc-components/Toasts';
import Avatar from 'components/doc-components/Avatar';
import Image from 'components/doc-components/Image';
import Tooltips from 'components/doc-components/Tooltips';
import Popovers from 'components/doc-components/Popovers';
import Figures from 'components/doc-components/Figures';
import Hoverbox from 'components/doc-components/Hoverbox';
import Tables from 'components/doc-components/Tables';
import FormControl from 'components/doc-components/FormControl';
import InputGroup from 'components/doc-components/InputGroup';
import Select from 'components/doc-components/Select';
import Checks from 'components/doc-components/Checks';
import Range from 'components/doc-components/Range';
import FormLayout from 'components/doc-components/FormLayout';
import FloatingLabels from 'components/doc-components/FloatingLabels';
import FormValidation from 'components/doc-components/FormValidation';
import BootstrapCarousel from 'components/doc-components/BootstrapCarousel';
import SlickCarousel from 'components/doc-components/SlickCarousel';
import Navs from 'components/doc-components/Navs';
import Navbars from 'components/doc-components/Navbars';
import Tabs from 'components/doc-components/Tabs';
import Collapse from 'components/doc-components/Collapse';
import CountUp from 'components/doc-components/CountUp';
import Embed from 'components/doc-components/Embed';
import Backgrounds from 'components/doc-components/Backgrounds';
import VerticalNavbar from 'components/doc-components/VerticalNavbar';
import NavBarTop from 'components/doc-components/NavBarTop';
import TypedText from 'components/doc-components/TypedText';
import FileUploader from 'components/doc-components/FileUploader';
import Starter from 'components/pages/Starter';
import AnimatedIcons from 'components/doc-components/AnimatedIcons';
import DatePicker from 'components/doc-components/DatePicker';
import FontAwesome from 'components/doc-components/FontAwesome';
import Profile from 'components/pages/user/profile/Profile';
import Associations from 'components/pages/asscociations/Associations';
import Settings from 'components/pages/user/settings/Settings';
import Placeholder from 'components/doc-components/Placeholder';
import Lightbox from 'components/doc-components/Lightbox';
import AdvanceTableExamples from 'components/doc-components/AdvanceTableExamples';
import FaqAlt from 'components/pages/faq/faq-alt/FaqAlt';
import FaqBasic from 'components/pages/faq/faq-basic/FaqBasic';
import FaqAccordion from 'components/pages/faq/faq-accordion/FaqAccordion';
import PrivacyPolicy from 'components/pages/miscellaneous/privacy-policy/PrivacyPolicy';
import InvitePeople from 'components/pages/miscellaneous/invite-people/InvitePeople';
import PricingDefault from 'components/pages/pricing/pricing-default/PricingDefault';
import PricingAlt from 'components/pages/pricing/pricing-alt/PricingAlt';
import Rating from 'components/doc-components/Rating';
import AdvanceSelect from 'components/doc-components/AdvanceSelect';
import DraggableExample from 'components/doc-components/DraggableExample';
import LineCharts from 'components/doc-components/charts-example/echarts/line-charts';
import BarCharts from 'components/doc-components/charts-example/echarts/bar-charts';
import CandlestickCharts from 'components/doc-components/charts-example/echarts/candlestick-charts';
import GeoMaps from 'components/doc-components/charts-example/echarts/geo-map';
import ScatterCharts from 'components/doc-components/charts-example/echarts/scatter-charts';
import PieCharts from 'components/doc-components/charts-example/echarts/pie-charts';
import RadarCharts from 'components/doc-components/charts-example/echarts/radar-charts/Index';
import HeatmapCharts from 'components/doc-components/charts-example/echarts/heatmap-chart';
import Chartjs from 'components/doc-components/charts-example/chartjs';
import D3js from 'components/doc-components/charts-example/d3';
import HowToUse from 'components/doc-components/charts-example/echarts/HowToUse';
import CookieNoticeExample from 'components/doc-components/CookieNoticeExample';
import Scrollbar from 'components/doc-components/Scrollbar';
import Scrollspy from 'components/doc-components/Scrollspy';
import ReactIcons from 'components/doc-components/ReactIcons';
import ReactPlayerExample from 'components/doc-components/ReactPlayerExample';
import TreeviewExample from 'components/doc-components/TreeviewExample';
import Timeline from 'components/doc-components/Timeline';
import Widgets from 'widgets/Widgets';

import SimpleLogin from 'components/authentication/simple/Login';
import SimpleLogout from 'components/authentication/simple/Logout';
import SimpleRegistration from 'components/authentication/simple/Registration';
import SimpleForgetPassword from 'components/authentication/simple/ForgetPassword';
import SimplePasswordReset from 'components/authentication/simple/PasswordReset';
import SimpleConfirmMail from 'components/authentication/simple/ConfirmMail';
import SimpleLockScreen from 'components/authentication/simple/LockScreen';
import CardLogin from 'components/authentication/card/Login';
import CardLogout from 'components/authentication/card/Logout';
import CardRegistration from 'components/authentication/card/Registration';
import CardForgetPassword from 'components/authentication/card/ForgetPassword';
import CardConfirmMail from 'components/authentication/card/ConfirmMail';
import CardPasswordReset from 'components/authentication/card/PasswordReset';
import CardLockScreen from 'components/authentication/card/LockScreen';
import SplitLogin from 'components/authentication/split/Login';
import SplitLogout from 'components/authentication/split/Logout';
import SplitRegistration from 'components/authentication/split/Registration';
import SplitForgetPassword from 'components/authentication/split/ForgetPassword';
import SplitPasswordReset from 'components/authentication/split/PasswordReset';
import SplitConfirmMail from 'components/authentication/split/ConfirmMail';
import SplitLockScreen from 'components/authentication/split/LockScreen';
import Dashboard from 'components/dashboards/default';
import TableView from 'components/app/support-desk/tickets-layout/TableView';
import CardView from 'components/app/support-desk/tickets-layout/CardView';
import Contacts from 'components/app/support-desk/contacts/Contacts';
import ContactDetails from 'components/app/support-desk/contact-details/ContactDetails';
import TicketsPreview from 'components/app/support-desk/tickets-preview/TicketsPreview';
import QuickLinks from 'components/app/support-desk/quick-links/QuickLinks';
import Reports from 'components/app/support-desk/reports/Reports';
import InputMaskExample from 'components/doc-components/InputMaskExample';
import RangeSlider from 'components/doc-components/RangeSlider';
import VerticalNavLayout from 'layouts/VerticalNavLayout';

const routes = [
  {
    element: <App />,
    children: [
      {
        path: 'landing',
        element: <Landing />
      },
      {
        path: rootPaths.errorsRoot,
        element: <ErrorLayout />,
        children: [
        ]
      },
      {
        path: rootPaths.authRoot,
        children: [
          {
            path: rootPaths.authSimpleRoot,
            element: <AuthSimpleLayout />,
            children: [
              {
                path: paths.simpleLogin,
                element: <SimpleLogin />
              },
              {
                path: paths.simpleRegister,
                element: <SimpleRegistration />
              },
              {
                path: paths.simpleLogout,
                element: <SimpleLogout />
              },
              {
                path: paths.simpleForgotPassword,
                element: <SimpleForgetPassword />
              },
              {
                path: paths.simpleResetPassword,
                element: <SimplePasswordReset />
              },
              {
                path: paths.simpleConfirmMail,
                element: <SimpleConfirmMail />
              },
              {
                path: paths.simpleLockScreen,
                element: <SimpleLockScreen />
              }
            ]
          },
          {
            path: rootPaths.authCardRoot,
            children: [
              {
                path: paths.cardLogin,
                element: <CardLogin />
              },
              {
                path: paths.cardRegister,
                element: <CardRegistration />
              },
              {
                path: paths.cardLogout,
                element: <CardLogout />
              },
              {
                path: paths.cardForgotPassword,
                element: <CardForgetPassword />
              },
              {
                path: paths.cardResetPassword,
                element: <CardPasswordReset />
              },
              {
                path: paths.cardConfirmMail,
                element: <CardConfirmMail />
              },
              {
                path: paths.cardLockScreen,
                element: <CardLockScreen />
              }
            ]
          },
          {
            path: rootPaths.authSplitRoot,
            children: [
              {
                path: paths.splitLogin,
                element: <SplitLogin />
              },
              {
                path: paths.splitRegister,
                element: <SplitRegistration />
              },
              {
                path: paths.splitLogout,
                element: <SplitLogout />
              },
              {
                path: paths.splitForgotPassword,
                element: <SplitForgetPassword />
              },
              {
                path: paths.splitResetPassword,
                element: <SplitPasswordReset />
              },
              {
                path: paths.splitConfirmMail,
                element: <SplitConfirmMail />
              },
              {
                path: paths.splitLockScreen,
                element: <SplitLockScreen />
              }
            ]
          },
          {
            path: paths.authWizard,
            element: <WizardAuth />
          }
        ]
      },
      {
        path: '/',
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <Dashboard />
          },
          {
            path: rootPaths.pagesRoot,
            children: [
              {
                path: paths.starter,
                element: <Starter />
              }
            ]
          },
          {
            path: rootPaths.userRoot,
            children: [
              {
                path: paths.userProfile,
                element: <Profile />
              },
              {
                path: paths.userSettings,
                element: <Settings />
              }
            ]
          },
          {
            path: rootPaths.pricingRoot,
            children: [
              {
                path: paths.pricingDefault,
                element: <PricingDefault />
              },
              {
                path: paths.pricingAlt,
                element: <PricingAlt />
              }
            ]
          },
          {
            path: rootPaths.faqRoot,
            children: [
              {
                path: paths.faqBasic,
                element: <FaqBasic />
              },
              {
                path: paths.faqAlt,
                element: <FaqAlt />
              },
              {
                path: paths.faqAccordion,
                element: <FaqAccordion />
              }
            ]
          },
          {
            path: rootPaths.miscRoot,
            children: [
              {
                path: paths.associations,
                element: <Associations />
              },
              {
                path: paths.invitePeople,
                element: <InvitePeople />
              },
              {
                path: paths.privacyPolicy,
                element: <PrivacyPolicy />
              }
            ]
          },
          {
            path: rootPaths.formsRoot,
            children: [
              {
                path: rootPaths.basicFormsRoot,
                children: [
                  {
                    path: paths.formControl,
                    element: <FormControl />
                  },
                  {
                    path: paths.inputGroup,
                    element: <InputGroup />
                  },
                  {
                    path: paths.select,
                    element: <Select />
                  },
                  {
                    path: paths.checks,
                    element: <Checks />
                  },
                  {
                    path: paths.range,
                    element: <Range />
                  },
                  {
                    path: paths.formLayout,
                    element: <FormLayout />
                  }
                ]
              },
              {
                path: rootPaths.advanceFormsRoot,
                children: [
                  {
                    path: paths.advanceSelect,
                    element: <AdvanceSelect />
                  },
                  {
                    path: paths.datePicker,
                    element: <DatePicker />
                  },
                  {
                    path: paths.fileUploader,
                    element: <FileUploader />
                  },
                  {
                    path: paths.inputMask,
                    element: <InputMaskExample />
                  },
                  {
                    path: paths.rangeSlider,
                    element: <RangeSlider />
                  },
                  {
                    path: paths.rating,
                    element: <Rating />
                  }
                ]
              },
              {
                path: paths.floatingLabels,
                element: <FloatingLabels />
              },
              {
                path: paths.validation,
                element: <FormValidation />
              }
            ]
          },
          {
            path: rootPaths.tableRoot,
            children: [
              {
                path: paths.basicTables,
                element: <Tables />
              },
              {
                path: paths.advanceTables,
                element: <AdvanceTableExamples />
              }
            ]
          },
          {
            path: rootPaths.chartsRoot,
            children: [
              {
                path: paths.chartjs,
                element: <Chartjs />
              },
              {
                path: paths.d3js,
                element: <D3js />
              },
              {
                path: rootPaths.echartsRoot,
                children: [
                  {
                    path: paths.echartsHowToUse,
                    element: <HowToUse />
                  },
                  {
                    path: paths.lineCharts,
                    element: <LineCharts />
                  },
                  {
                    path: paths.barCharts,
                    element: <BarCharts />
                  },
                  {
                    path: paths.candlestickCharts,
                    element: <CandlestickCharts />
                  },
                  {
                    path: paths.geoMap,
                    element: <GeoMaps />
                  },
                  {
                    path: paths.scatterCharts,
                    element: <ScatterCharts />
                  },
                  {
                    path: paths.pieCharts,
                    element: <PieCharts />
                  },
                  {
                    path: paths.radarCharts,
                    element: <RadarCharts />
                  },
                  {
                    path: paths.heatmapCharts,
                    element: <HeatmapCharts />
                  }
                ]
              }
            ]
          },
          {
            path: rootPaths.iconsRoot,
            children: [
              {
                path: paths.fontAwesome,
                element: <FontAwesome />
              },
              {
                path: paths.reactIcons,
                element: <ReactIcons />
              }
            ]
          },
          {
            path: rootPaths.mapsRoot,
            children: [
            ]
          },
          {
            path: rootPaths.componentsRoot,
            children: [
              {
                path: paths.alerts,
                element: <Alerts />
              },
              {
                path: paths.accordion,
                element: <Accordion />
              },
              {
                path: paths.animatedIcons,
                element: <AnimatedIcons />
              },
              {
                path: paths.background,
                element: <Backgrounds />
              },
              {
                path: paths.badges,
                element: <Badges />
              },
              {
                path: paths.breadcrumbs,
                element: <Breadcrumbs />
              },
              {
                path: paths.buttons,
                element: <Buttons />
              },
              {
                path: paths.calendarExample,
                element: <CalendarExample />
              },
              {
                path: paths.cards,
                element: <Cards />
              },
              {
                path: paths.cards,
                element: <Cards />
              },
              {
                path: rootPaths.carouselRoot,
                children: [
                  {
                    path: paths.bootstrapCarousel,
                    element: <BootstrapCarousel />
                  },
                  {
                    path: paths.slickCarousel,
                    element: <SlickCarousel />
                  }
                ]
              },
              {
                path: paths.collapse,
                element: <Collapse />
              },
              {
                path: paths.cookieNotice,
                element: <CookieNoticeExample />
              },
              {
                path: paths.countup,
                element: <CountUp />
              },
              {
                path: paths.draggable,
                element: <DraggableExample />
              },
              {
                path: paths.dropdowns,
                element: <Dropdowns />
              },
              {
                path: paths.listGroup,
                element: <ListGroups />
              },
              {
                path: paths.modals,
                element: <Modals />
              },
              {
                path: paths.offcanvas,
                element: <Offcanvas />
              },
              {
                path: rootPaths.navsAndTabsRoot,
                children: [
                  {
                    path: paths.navs,
                    element: <Navs />
                  },
                  {
                    path: paths.navbar,
                    element: <Navbars />
                  },
                  {
                    path: paths.verticalNavbar,
                    element: <VerticalNavbar />
                  },
                  {
                    path: paths.topNavbar,
                    element: <NavBarTop />
                  },
                  {
                    path: paths.tabs,
                    element: <Tabs />
                  }
                ]
              },
              {
                path: rootPaths.picturesRoot,
                children: [
                  {
                    path: paths.avatar,
                    element: <Avatar />
                  },
                  {
                    path: paths.images,
                    element: <Image />
                  },
                  {
                    path: paths.figures,
                    element: <Figures />
                  },
                  {
                    path: paths.hoverbox,
                    element: <Hoverbox />
                  },
                  {
                    path: paths.lightbox,
                    element: <Lightbox />
                  }
                ]
              },
              {
                path: paths.progressBar,
                element: <BasicProgressBar />
              },
              {
                path: paths.pagination,
                element: <Pagination />
              },
              {
                path: paths.placeholder,
                element: <Placeholder />
              },
              {
                path: paths.popovers,
                element: <Popovers />
              },
              {
                path: paths.scrollspy,
                element: <Scrollspy />
              },
              {
                path: paths.spinners,
                element: <Spinners />
              },
              {
                path: paths.timeline,
                element: <Timeline />
              },
              {
                path: paths.toasts,
                element: <Toasts />
              },
              {
                path: paths.tooltips,
                element: <Tooltips />
              },
              {
                path: paths.treeview,
                element: <TreeviewExample />
              },
              {
                path: paths.typedText,
                element: <TypedText />
              },
              {
                path: rootPaths.videosRoot,
                children: [
                  {
                    path: paths.embedVideo,
                    element: <Embed />
                  },
                  {
                    path: paths.reactPlayer,
                    element: <ReactPlayerExample />
                  }
                ]
              }
            ]
          },
          {
            path: rootPaths.utilitiesRoot,
            children: [
              {
                path: paths.scrollBar,
                element: <Scrollbar />
              }
            ]
          },
          {
            path: paths.widgets,
            element: <Widgets />
          }
        ]
      },
      {
        path: '/',
        element: <VerticalNavLayout />,
        children: [
          {
            path: paths.verticalNavLayout,
            element: <Dashboard />
          }
        ]
      },
      {
        path: '*',
        element: <Navigate to={paths.error404} replace />
      }
    ]
  }
];

export const router = createBrowserRouter(routes, {
  basename: process.env.PUBLIC_URL
});

export default routes;
