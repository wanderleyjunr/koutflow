import { routes } from '@/config/routes';
import { DUMMY_ID } from '@/config/constants';
import {
  PiShoppingCart,
  PiHeadset,
  PiPackage,
  PiChartBar,
  PiFileImage,
  PiCurrencyDollar,
  PiSquaresFour,
  PiGridFour,
  PiFeather,
  PiChartLineUp,
  PiMapPinLine,
  PiUserGear,
  PiBellSimpleRinging,
  PiUser,
  PiEnvelopeSimpleOpen,
  PiSteps,
  PiCreditCard,
  PiStack,
  PiTable,
  PiBrowser,
  PiBoundingBox,
  PiHourglassSimple,
  PiUserCircle,
  PiShootingStar,
  PiRocketLaunch,
  PiFolderLock,
  PiBinoculars,
  PiHammer,
  PiNoteBlank,
  PiUserPlus,
  PiShieldCheck,
  PiLockKey,
  PiChatCenteredDots,
  PiMagicWand,
} from 'react-icons/pi';

// Note: do not add href in the label object, it is rendering as label
export const berylliumSidebarMenuItems = [
  // label start
  {
    name: 'Home',
  },
  // label end
  {
    name: 'File Manager',
    href: '/',
    // href: routes.file.dashboard,
    icon: <PiFileImage />,
  },
  {
    name: 'Logistics',
    href: routes.logistics.dashboard,
    icon: <PiPackage />,
  },
  {
    name: 'E-Commerce',
    href: routes.eCommerce.dashboard,
    icon: <PiShoppingCart />,
  },
  {
    name: 'Analytics',
    href: routes.analytics,
    icon: <PiChartBar />,
  },
  {
    name: 'Support',
    href: routes.support.dashboard,
    icon: <PiHeadset />,
  },
  // label start
  {
    name: 'Apps Kit',
  },
  // label end
  {
    name: 'E-Commerce',
    href: '#',
    icon: <PiShoppingCart />,
    dropdownItems: [
      {
        name: 'Products',
        href: routes.eCommerce.products,
      },
      {
        name: 'Product Details',
        href: routes.eCommerce.productDetails(DUMMY_ID),
      },
      {
        name: 'Create Product',
        href: routes.eCommerce.createProduct,
      },
      {
        name: 'Edit Product',
        href: routes.eCommerce.ediProduct(DUMMY_ID),
      },
      {
        name: 'Categories',
        href: routes.eCommerce.categories,
      },
      {
        name: 'Create Category',
        href: routes.eCommerce.createCategory,
      },
      {
        name: 'Edit Category',
        href: routes.eCommerce.editCategory(DUMMY_ID),
      },
      {
        name: 'Orders',
        href: routes.eCommerce.orders,
      },
      {
        name: 'Order Details',
        href: routes.eCommerce.orderDetails(DUMMY_ID),
      },
      {
        name: 'Create Order',
        href: routes.eCommerce.createOrder,
      },
      {
        name: 'Edit Order',
        href: routes.eCommerce.editOrder(DUMMY_ID),
      },
      {
        name: 'Reviews',
        href: routes.eCommerce.reviews,
      },
      {
        name: 'Shop',
        href: routes.eCommerce.shop,
      },
      {
        name: 'Cart',
        href: routes.eCommerce.cart,
      },
      {
        name: 'Checkout & Payment',
        href: routes.eCommerce.checkout,
      },
    ],
  },
  {
    name: 'Support',
    href: '#',
    icon: <PiHeadset />,
    dropdownItems: [
      {
        name: 'Inbox',
        href: routes.support.inbox,
      },
      {
        name: 'Snippets',
        href: routes.support.snippets,
      },
      {
        name: 'Templates',
        href: routes.support.templates,
      },
    ],
  },
  {
    name: 'Invoice',
    href: '#',
    icon: <PiCurrencyDollar />,
    dropdownItems: [
      {
        name: 'List',
        href: routes.invoice.home,
      },
      {
        name: 'Details',
        href: routes.invoice.details(DUMMY_ID),
      },
      {
        name: 'Create',
        href: routes.invoice.create,
      },
      {
        name: 'Edit',
        href: routes.invoice.edit(DUMMY_ID),
      },
    ],
  },
  {
    name: 'Logistics',
    href: '#',
    icon: <PiPackage />,
    dropdownItems: [
      {
        name: 'Shipment List',
        href: routes.logistics.shipmentList,
      },
      {
        name: 'Shipment Details',
        href: routes.logistics.shipmentDetails(DUMMY_ID),
      },
      {
        name: 'Create Shipment',
        href: routes.logistics.createShipment,
      },
      {
        name: 'Edit Shipment',
        href: routes.logistics.editShipment(DUMMY_ID),
      },
      {
        name: 'Customer Profile',
        href: routes.logistics.customerProfile,
      },
      {
        name: 'Tracking',
        href: routes.logistics.tracking(DUMMY_ID),
      },
    ],
  },
  {
    name: 'File Manager',
    href: routes.file.manager,
    icon: <PiFileImage />,
  },
  {
    name: 'Roles & Permissions',
    href: routes.rolesPermissions,
    icon: <PiFolderLock />,
  },
  // label start
  {
    name: 'Widgets',
  },
  // label end
  {
    name: 'Cards',
    href: routes.widgets.cards,
    icon: <PiSquaresFour />,
  },
  {
    name: 'Icons',
    href: routes.widgets.icons,
    icon: <PiFeather />,
  },
  {
    name: 'Charts',
    href: routes.widgets.charts,
    icon: <PiChartLineUp />,
  },
  // {
  //   name: 'Banners',
  //   href: routes.widgets.banners,
  //   icon: <PiImage />,
  // },
  {
    name: 'Maps',
    href: routes.widgets.maps,
    icon: <PiMapPinLine />,
  },
  // label start
  {
    name: 'Forms',
  },
  // label end
  {
    name: 'Account Settings',
    href: routes.forms.profileSettings,
    icon: <PiUserGear />,
  },
  {
    name: 'Notification Preference',
    href: routes.forms.notificationPreference,
    icon: <PiBellSimpleRinging />,
  },
  {
    name: 'Personal Information',
    href: routes.forms.personalInformation,
    icon: <PiUser />,
  },
  {
    name: 'Newsletter',
    href: routes.forms.newsletter,
    icon: <PiEnvelopeSimpleOpen />,
  },
  {
    name: 'Multi Step',
    href: routes.multiStep,
    icon: <PiSteps />,
  },
  {
    name: 'Payment Checkout',
    href: routes.eCommerce.checkout,
    icon: <PiCreditCard />,
  },
  // label start
  {
    name: 'Tables',
  },
  // label end
  {
    name: 'Basic',
    href: routes.tables.basic,
    icon: <PiGridFour />,
  },
  {
    name: 'Collapsible',
    href: routes.tables.collapsible,
    icon: <PiStack />,
  },
  {
    name: 'Enhanced',
    href: routes.tables.enhanced,
    icon: <PiTable />,
  },
  {
    name: 'Sticky Header',
    href: routes.tables.stickyHeader,
    icon: <PiBrowser />,
  },
  {
    name: 'Pagination',
    href: routes.tables.pagination,
    icon: <PiBoundingBox />,
  },
  {
    name: 'Search',
    href: routes.tables.search,
    icon: <PiHourglassSimple />,
  },
  // label start
  {
    name: 'Pages',
  },
  // label end
  {
    name: 'Search & Filters',
    href: '#',
    icon: <PiMagicWand />,
    dropdownItems: [
      {
        name: 'Real Estate',
        href: routes.search.realEstate,
      },
      {
        name: 'NFT',
        href: routes.search.nft,
      },
    ],
  },
  {
    name: 'Profile',
    href: routes.profile,
    icon: <PiUserCircle />,
  },
  {
    name: 'Welcome',
    href: routes.welcome,
    icon: <PiShootingStar />,
  },
  {
    name: 'Coming soon',
    href: routes.comingSoon,
    icon: <PiRocketLaunch />,
  },
  {
    name: 'Access Denied',
    href: routes.accessDenied,
    icon: <PiFolderLock />,
  },
  {
    name: 'Not Found',
    href: routes.notFound,
    icon: <PiBinoculars />,
  },
  {
    name: 'Maintenance',
    href: routes.maintenance,
    icon: <PiHammer />,
  },
  {
    name: 'Blank',
    href: routes.blank,
    icon: <PiNoteBlank />,
  },

  // label start
  {
    name: 'Authentication',
  },
  // label end
  {
    name: 'Sign Up',
    href: '#',
    icon: <PiUserPlus />,
    dropdownItems: [
      {
        name: 'Modern Sign up',
        href: routes.auth.signUp,
      },
      {
        name: 'Vintage Sign up',
        href: routes.auth.signUp,
      },
      {
        name: 'Trendy Sign up',
        href: routes.auth.signUp,
      },
      {
        name: 'Elegant Sign up',
        href: routes.auth.signUp,
      },
      {
        name: 'Classic Sign up',
        href: routes.auth.signUp,
      },
    ],
  },
  {
    name: 'Sign In',
    href: '#',
    icon: <PiShieldCheck />,
    dropdownItems: [
      {
        name: 'Modern Sign in',
        href: routes.auth.signIn,
      },
      {
        name: 'Vintage Sign in',
        href: routes.auth.signIn,
      },
      {
        name: 'Trendy Sign in',
        href: routes.auth.signIn,
      },
      {
        name: 'Elegant Sign in',
        href: routes.auth.signIn,
      },
      {
        name: 'Classic Sign in',
        href: routes.auth.signIn,
      },
    ],
  },
  {
    name: 'Forgot Password',
    href: '#',
    icon: <PiLockKey />,
    dropdownItems: [
      {
        name: 'Modern Forgot password',
        href: routes.auth.forgotPassword,
      },
      {
        name: 'Vintage Forgot password',
        href: routes.auth.forgotPassword,
      },
      {
        name: 'Trendy Forgot password',
        href: routes.auth.forgotPassword,
      },
      {
        name: 'Elegant Forgot password',
        href: routes.auth.forgotPassword,
      },
      {
        name: 'Classic Forgot password',
        href: routes.auth.forgotPassword,
      },
    ],
  },
  {
    name: 'OTP Pages',
    href: '#',
    icon: <PiChatCenteredDots />,
    dropdownItems: [
      {
        name: 'Modern OTP page',
        href: routes.auth.otp,
      },
      {
        name: 'Vintage OTP page',
        href: routes.auth.otp,
      },
      {
        name: 'Trendy OTP page',
        href: routes.auth.otp,
      },
      {
        name: 'Elegant OTP page',
        href: routes.auth.otp,
      },
      {
        name: 'Classic OTP page',
        href: routes.auth.otp,
      },
    ],
  },
];
