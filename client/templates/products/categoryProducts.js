import { Components } from "@reactioncommerce/reaction-components";
import { $ } from "meteor/jquery";
import { Template } from "meteor/templating";
import { Reaction } from "/client/api";

Template.categoryProducts.helpers({
  component() {
    return Components.CategoryProducts;
  }
});

/**
 * products events
 */

Template.categoryProducts.events({
  // This will need to change
  "click #productListView": function () {
    $(".product-grid").hide();
    return $(".product-list").show();
  },
  "click #productGridView": function () {
    $(".product-list").hide();
    return $(".product-grid").show();
  },
  "click .product-list-item": function () {
    // go to new product
    Reaction.Router.go("product", {
      handle: this._id
    });
  }
});
