import paths, { rootPaths } from './paths';

export const dashboardRoutes = {
  label: 'Dashboard',
  labelDisable: true,
  children: [
    {
      name: 'Dashboard',
      active: true,
      icon: 'chart-pie',
      to: rootPaths.dashboard
    }
  ]
};
export const appRoutes = {
  label: 'app',
  children: [
    {
      name: 'Calendar',
      icon: 'calendar-alt',
      to: paths.calendar,
      active: true
    },
    {
      name: 'Email',
      icon: 'envelope-open',
      active: true,
      children: [
        {
          name: 'Inbox',
          to: paths.emailInbox,
          active: true
        },
        {
          name: 'Email detail',
          to: paths.emailDetail,
          active: true
        },
        {
          name: 'Compose',
          to: paths.emailCompose,
          active: true
        }
      ]
    },
    {
      name: 'Events',
      icon: 'calendar-day',
      active: true,
      children: [
        {
          name: 'Create an event',
          to: paths.createEvent,
          active: true
        },
        {
          name: 'Event detail',
          to: paths.eventDetail,
          active: true
        },
        {
          name: 'Event list',
          to: paths.eventList,
          active: true
        }
      ]
    },
    {
      name: 'E Commerce',
      icon: 'shopping-cart',
      active: true,
      children: [
        {
          name: 'Product',
          active: true,
          children: [
            {
              name: 'Add a product',
              to: paths.addProduct,
              active: true
            },
            {
              name: 'Product list',
              to: paths.products('product-list'),
              active: true
            },
            {
              name: 'Product grid',
              to: paths.products('product-grid'),
              active: true
            },
            {
              name: 'Product details',
              to: paths.productDetails(),
              active: true
            }
          ]
        },
        {
          name: 'Orders',
          active: true,
          children: [
            {
              name: 'Order list',
              to: paths.orderList,
              active: true
            },
            {
              name: 'Order details',
              to: paths.orderDetails,
              active: true
            }
          ]
        },
        {
          name: 'Customers',
          to: paths.customers,
          active: true
        },
        {
          name: 'Customer details',
          to: paths.customerDetails,
          active: true
        },
        {
          name: 'Shopping cart',
          to: paths.shoppingCart,
          active: true
        },
        {
          name: 'Checkout',
          to: paths.checkout,
          active: true
        },
        {
          name: 'Billing',
          to: paths.billing,
          active: true
        },
        {
          name: 'Invoice',
          to: paths.invoice,
          active: true
        }
      ]
    },
    {
      name: 'E Learning',
      icon: 'graduation-cap',
      active: true,
      badge: {
        type: 'success',
        text: 'New'
      },
      children: [
        {
          name: 'Course',
          active: true,
          children: [
            {
              name: 'Create a course',
              to: paths.createCourse,
              active: true
            },
            {
              name: 'Course list',
              to: paths.courses('course-list'),
              active: true
            },
            {
              name: 'Course grid',
              to: paths.courses('course-grid'),
              active: true
            },
            {
              name: 'Course details',
              to: paths.courseDetails(),
              active: true
            }
          ]
        },
        {
          name: 'Student overview',
          to: paths.studentOverview,
          active: true
        },
        {
          name: 'Trainer profile',
          to: paths.trainerProfile,
          active: true
        }
      ]
    },
    {
      name: 'Kanban',
      icon: ['fab', 'trello'],
      to: paths.kanban,
      active: true
    },
    {
      name: 'Social',
      icon: 'share-alt',
      active: true,
      children: [
        {
          name: 'Feed',
          to: paths.feed,
          active: true
        },
        {
          name: 'Activity log',
          to: paths.activityLog,
          active: true
        },
        {
          name: 'Notifications',
          to: paths.notifications,
          active: true
        },
        {
          name: 'Followers',
          to: paths.followers,
          active: true
        }
      ]
    },
    {
      name: 'Support desk',
      icon: 'ticket-alt',
      active: true,
      children: [
        {
          name: 'Table view',
          to: paths.ticketsTable,
          active: true
        },
        {
          name: 'Card view',
          to: paths.ticketsCard,
          active: true
        },
        {
          name: 'Contacts',
          to: paths.contacts,
          active: true
        },
        {
          name: 'Contact details',
          to: paths.contactDetails,
          active: true
        },
        {
          name: 'Tickets preview',
          to: paths.ticketsPreview,
          active: true
        },
        {
          name: 'Quick links',
          to: paths.quickLinks,
          active: true
        },
        {
          name: 'Reports',
          to: paths.reports,
          active: true
        }
      ]
    }
  ]
};

export default [
  dashboardRoutes,
  appRoutes
];
