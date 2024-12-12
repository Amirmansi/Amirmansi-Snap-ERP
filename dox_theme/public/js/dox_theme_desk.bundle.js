import "./ui/toolbar/navbar.html";
// TaxesAndTotalsExtend is just variable name
// erpnext.taxes_and_totals is function contain function you want to override

// const TaxesAndTotalsExtend = frappe.workspace.extend({
// });
// console.log("hello from dox")
// frappe.provide("frappe.view.Workspace");
// frappe.views.Workspace.extend({
//     sidebar_item_container(item) {
//         console.log('Hello from extend taxes and total extend !!');
//     }
// });


class Custom_Workspace extends frappe.views.Workspace {
    // sidebar_item_container(item) {
    //     return $(`
	// 		<div class="sidebar-item-container ${item.is_editable ? "is-draggable" : ""}" item-parent="${item.parent_page
    //         }" item-name="${item.title}" item-public="${item.public || 0}">
	// 			<div class="desk-sidebar-item standard-sidebar-item ${item.selected ? "selected" : ""}">
	// 				<a
	// 					href="/app/${item.publica
    //             ? frappe.router.slug(item.title)
    //             : "private/" + frappe.router.slug(item.title)
    //         }"
	// 					class="item-anchor ${item.is_editable ? "" : "block-click"}" title="${__(item.title)}"
	// 				>
	// 					<span class="sidebar-item-icon" item-icon=${item.icon || "folder-normal"}>
    //                     <img class="icon-md mr-2" src=${item.svg} />
    //                     </span>
	// 					<span class="sidebar-item-label">${__(item.title)}<span>
	// 				</a>
	// 				<div class="sidebar-item-control"></div>
	// 			</div>
	// 			<div class="sidebar-child-item nested-container"></div>
	// 		</div>
	// 	`);
    // },
	sidebar_item_container(item) {
		return $(`
			<div
				class="sidebar-item-container ${item.is_editable ? "is-draggable" : ""}"
				item-parent="${item.parent_page}"
				item-name="${item.title}"
				item-public="${item.public || 0}"
				item-is-hidden="${item.is_hidden || 0}"
			>
				<div class="desk-sidebar-item standard-sidebar-item ${item.selected ? "selected" : ""}">
					<a
						href="/app/${
							item.public
								? frappe.router.slug(item.title)
								: "private/" + frappe.router.slug(item.title)
						}"
						class="item-anchor ${item.is_editable ? "" : "block-click"}" title="${__(item.title)}"
					>
                    
						<span class="sidebar-item-icon" item-icon=${item.icon || "folder-normal"}>
                        ${item.svg ? '<img class="icon-md mr-2" src='+item.svg+' />' : frappe.utils.icon(item.icon || "folder-normal","md")}
                        
                        
        </span>
						<span class="sidebar-item-label">${__(item.title)}<span>
					</a>
					<div class="sidebar-item-control"></div>
				</div>
				<div class="sidebar-child-item nested-container"></div>
			</div>
		`);
	}
}

frappe.standard_pages["Workspaces"] = function () {
    var wrapper = frappe.container.add_page("Workspaces");

    frappe.ui.make_app_page({
        parent: wrapper,
        name: "Workspaces",
        title: __("Workspace"),
    });

    frappe.workspace = new Custom_Workspace(wrapper);
    $(wrapper).bind("show", function () {
        frappe.workspace.show();
    });
};
