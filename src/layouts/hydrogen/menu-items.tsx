import { routes } from '@/config/routes';
import { DUMMY_ID } from '@/config/constants';
import {
  PiShoppingCartDuotone,
  PiHeadsetDuotone,
  PiPackageDuotone,
  PiChartBarDuotone,
  PiFileImageDuotone,
  PiCurrencyDollarDuotone,
  PiSquaresFourDuotone,
  PiGridFourDuotone,
  PiFeatherDuotone,
  PiChartLineUpDuotone,
  // PiImageDuotone,
  PiMapPinLineDuotone,
  PiUserGearDuotone,
  PiBellSimpleRingingDuotone,
  PiUserDuotone,
  PiEnvelopeSimpleOpenDuotone,
  PiStepsDuotone,
  PiCreditCardDuotone,
  PiStackDuotone,
  PiTableDuotone,
  PiBrowserDuotone,
  PiBoundingBoxDuotone,
  PiHourglassSimpleDuotone,
  PiUserCircleDuotone,
  PiShootingStarDuotone,
  PiRocketLaunchDuotone,
  PiFolderLockDuotone,
  PiBinocularsDuotone,
  PiHammerDuotone,
  PiNoteBlankDuotone,
  PiUserPlusDuotone,
  PiShieldCheckDuotone,
  PiLockKeyDuotone,
  PiChatCenteredDotsDuotone,
  PiMagicWandDuotone,
  PiCalendarPlusDuotone,
} from 'react-icons/pi';

// Note: do not add href in the label object, it is rendering as label
export const menuItems = [
  // label start
  {
    name: 'Home',
  },
  // label end
  {
    name: 'File Manager',
    href: '/',
    // href: routes.file.dashboard,
    icon: <PiFileImageDuotone />,
  },
  {
    name: 'Logistics',
    href: routes.logistics.dashboard,
    icon: <PiPackageDuotone />,
  },
  {
    name: 'E-Commerce',
    href: routes.eCommerce.dashboard,
    icon: <PiShoppingCartDuotone />,
  },
  {
    name: 'Analytics',
    href: routes.analytics,
    icon: <PiChartBarDuotone />,
  },
  {
    name: 'Support',
    href: routes.support.dashboard,
    icon: <PiHeadsetDuotone />,
  },
  // label start
  {
    name: 'Apps Kit',
  },
  // label end
  {
    name: 'E-Commerce',
    href: '#',
    icon: <PiShoppingCartDuotone />,
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
    icon: <PiHeadsetDuotone />,
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
    icon: <PiCurrencyDollarDuotone />,
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
    icon: <PiPackageDuotone />,
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
    icon: <PiFileImageDuotone />,
  },
  {
    name: 'Event Calendar',
    href: routes.eventCalendar,
    icon: <PiCalendarPlusDuotone />,
  },
  {
    name: 'Roles & Permissions',
    href: routes.rolesPermissions,
    icon: <PiFolderLockDuotone />,
  },
  // label start
  {
    name: 'Widgets',
  },
  // label end
  {
    name: 'Cards',
    href: routes.widgets.cards,
    icon: <PiSquaresFourDuotone />,
  },
  {
    name: 'Icons',
    href: routes.widgets.icons,
    icon: <PiFeatherDuotone />,
  },
  {
    name: 'Charts',
    href: routes.widgets.charts,
    icon: <PiChartLineUpDuotone />,
  },
  // {
  //   name: 'Banners',
  //   href: routes.widgets.banners,
  //   icon: <PiImageDuotone />,
  // },
  {
    name: 'Maps',
    href: routes.widgets.maps,
    icon: <PiMapPinLineDuotone />,
  },
  // label start
  {
    name: 'Forms',
  },
  // label end
  {
    name: 'Account Settings',
    href: routes.forms.profileSettings,
    icon: <PiUserGearDuotone />,
  },
  {
    name: 'Notification Preference',
    href: routes.forms.notificationPreference,
    icon: <PiBellSimpleRingingDuotone />,
  },
  {
    name: 'Personal Information',
    href: routes.forms.personalInformation,
    icon: <PiUserDuotone />,
  },
  {
    name: 'Newsletter',
    href: routes.forms.newsletter,
    icon: <PiEnvelopeSimpleOpenDuotone />,
  },
  {
    name: 'Multi Step',
    href: routes.multiStep,
    icon: <PiStepsDuotone />,
  },
  {
    name: 'Payment Checkout',
    href: routes.eCommerce.checkout,
    icon: <PiCreditCardDuotone />,
  },
  // label start
  {
    name: 'Tables',
  },
  // label end
  {
    name: 'Basic',
    href: routes.tables.basic,
    icon: <PiGridFourDuotone />,
  },
  {
    name: 'Collapsible',
    href: routes.tables.collapsible,
    icon: <PiStackDuotone />,
  },
  {
    name: 'Enhanced',
    href: routes.tables.enhanced,
    icon: <PiTableDuotone />,
  },
  {
    name: 'Sticky Header',
    href: routes.tables.stickyHeader,
    icon: <PiBrowserDuotone />,
  },
  {
    name: 'Pagination',
    href: routes.tables.pagination,
    icon: <PiBoundingBoxDuotone />,
  },
  {
    name: 'Search',
    href: routes.tables.search,
    icon: <PiHourglassSimpleDuotone />,
  },
  // label start
  {
    name: 'Pages',
  },
  // label end
  {
    name: 'Search & Filters',
    href: '#',
    icon: <PiMagicWandDuotone />,
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
    icon: <PiUserCircleDuotone />,
  },
  {
    name: 'Welcome',
    href: routes.welcome,
    icon: <PiShootingStarDuotone />,
  },
  {
    name: 'Coming soon',
    href: routes.comingSoon,
    icon: <PiRocketLaunchDuotone />,
  },
  {
    name: 'Access Denied',
    href: routes.accessDenied,
    icon: <PiFolderLockDuotone />,
  },
  {
    name: 'Not Found',
    href: routes.notFound,
    icon: <PiBinocularsDuotone />,
  },
  {
    name: 'Maintenance',
    href: routes.maintenance,
    icon: <PiHammerDuotone />,
  },
  {
    name: 'Blank',
    href: routes.blank,
    icon: <PiNoteBlankDuotone />,
  },

  // label start
  {
    name: 'Authentication',
  },
  // label end
  {
    name: 'Sign Up',
    href: '#',
    icon: <PiUserPlusDuotone />,
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
    icon: <PiShieldCheckDuotone />,
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
    icon: <PiLockKeyDuotone />,
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
    icon: <PiChatCenteredDotsDuotone />,
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
