import { Reaction } from "/server/api";

Reaction.registerPackage({
  label: "Category Products",
  name: "reaction-category-products",
  icon: "fa fa-cubes",
  autoEnable: true,
  // registry: [{
  //   route: "/tag/:slug?",
  //   name: "tag",
  //   template: "products",
  //   workflow: "coreProductGridWorkflow"
  // }],
  // Think about creating a route for a categories page for the future
  layout: [{
    layout: "coreLayout",
    workflow: "coreProductGridWorkflow",
    collection: "Products",
    theme: "default",
    enabled: true,
    structure: {
      template: "categoryProducts",
      layoutHeader: "layoutHeader",
      layoutFooter: "",
      notFound: "productNotFound",
      dashboardHeader: "gridPublishControls",
      dashboardControls: "productDetailDashboardControls",
      dashboardHeaderControls: "",
      adminControlsFooter: "adminControlsFooter"
    }
  }]
});
