angular.module('templates.app', ['admin/projects/projects-edit.tpl.html', 'admin/projects/projects-list.tpl.html', 'admin/users/users-edit.tpl.html', 'admin/users/users-list.tpl.html', 'dashboard/dashboard.tpl.html', 'header.tpl.html', 'notifications.tpl.html', 'projects/productbacklog/productbacklog-edit.tpl.html', 'projects/productbacklog/productbacklog-list.tpl.html', 'projects/projects-list.tpl.html', 'projects/sprints/sprints-edit.tpl.html', 'projects/sprints/sprints-list.tpl.html', 'projects/sprints/tasks/tasks-edit.tpl.html', 'projects/sprints/tasks/tasks-list.tpl.html', 'projectsinfo/list.tpl.html']);

angular.module("admin/projects/projects-edit.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/projects/projects-edit.tpl.html",
    "<div class=\"well\">\n" +
    "    <form name=\"form\" crud-edit=\"project\">\n" +
    "        <legend>Project</legend>\n" +
    "        <div class=\"row-fluid\">\n" +
    "            <div class=\"span6\">\n" +
    "                <label>Name</label>\n" +
    "                <input type=\"text\" name=\"name\" ng-model=\"project.name\" class=\"span10\" required autofocus>\n" +
    "                <label>Description</label>\n" +
    "                <textarea rows=\"10\" cols=\"10\" ng-model=\"project.desc\" class=\"span10\">\n" +
    "                </textarea>\n" +
    "            </div>\n" +
    "            <div class=\"span6\" ng-controller=\"TeamMembersController\">\n" +
    "                <label>Product Owner</label>\n" +
    "                <select class=\"span12\" ng-model=\"project.productOwner\"\n" +
    "                        ng-options=\"user.$id() as user.getFullName() for user in productOwnerCandidates()\" required>\n" +
    "                    <option value=\"\">-- choose --</option>\n" +
    "                </select>\n" +
    "                <label>Scrum Master</label>\n" +
    "                <select class=\"span12\" ng-model=\"project.scrumMaster\"\n" +
    "                        ng-options=\"user.$id() as user.getFullName() for user in scrumMasterCandidates()\" required>\n" +
    "                    <option value=\"\">-- choose --</option>\n" +
    "                </select>\n" +
    "                <label>Development Team</label>\n" +
    "                <table class=\"table table-bordered table-condensed table-striped table-hover\">\n" +
    "                    <thead>\n" +
    "                    <tr>\n" +
    "                        <th>User</th>\n" +
    "                        <th>&nbsp;</th>\n" +
    "                    </tr>\n" +
    "                    </thead>\n" +
    "                    <tbody>\n" +
    "                    <tr ng-repeat=\"userId in project.teamMembers\">\n" +
    "                        <td>{{usersLookup[userId].getFullName()}}</td>\n" +
    "                        <td>\n" +
    "                            <button class=\"btn btn-small\" ng-click=\"removeTeamMember(userId)\">Remove</button>\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                        <td><select class=\"span6\" ng-model=\"selTeamMember\"\n" +
    "                                    ng-options=\"user.$id() as user.getFullName() for user in teamMemberCandidates()\"></select>\n" +
    "                        </td>\n" +
    "                        <td>\n" +
    "                            <button class=\"btn btn-small\" ng-click=\"addTeamMember(selTeamMember)\" ng-disabled=\"!selTeamMember\">Add\n" +
    "                            </button>\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                    </tbody>\n" +
    "                </table>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"row-fluid\">\n" +
    "            <hr>\n" +
    "            <crud-buttons class=\"span12\"></crud-buttons>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>");
}]);

angular.module("admin/projects/projects-list.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/projects/projects-list.tpl.html",
    "<table class=\"table table-bordered table-condensed table-striped table-hover\">\n" +
    "    <thead>\n" +
    "    <tr>\n" +
    "        <th>Name</th>\n" +
    "        <th>Description</th>\n" +
    "    </tr>\n" +
    "    </thead>\n" +
    "    <tbody>\n" +
    "    <tr ng-repeat=\"project in projects\" ng-click=\"edit(project.$id())\">\n" +
    "        <td>{{project.name}}</td>\n" +
    "        <td>{{project.desc}}</td>\n" +
    "    </tr>\n" +
    "    </tbody>\n" +
    "</table>\n" +
    "<div class=\"well\">\n" +
    "    <button class=\"btn\" ng-click=\"new()\">New Project</button>\n" +
    "</div>\n" +
    "");
}]);

angular.module("admin/users/users-edit.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/users/users-edit.tpl.html",
    "<div class=\"well\">\n" +
    "    <form name=\"form\" novalidate crud-edit=\"user\">\n" +
    "        <legend>User</legend>\n" +
    "        <gravatar email=\"user.email\" size=\"200\" class=\"img-polaroid pull-right\"></gravatar>\n" +
    "        <label for=\"email\">E-mail</label>\n" +
    "        <input class=\"span6\" type=\"email\" id=\"email\" name=\"email\" ng-model=\"user.email\" required unique-email>\n" +
    "        <span ng-show=\"showError('email', 'required')\" class=\"help-inline\">This field is required.</span>\n" +
    "        <span ng-show=\"showError('email', 'email')\" class=\"help-inline\">Please enter a valid email address.</span>\n" +
    "        <span ng-show=\"showError('email', 'uniqueEmail')\" class=\"help-inline\">This email address is not available - please enter another.</span>\n" +
    "        <label for=\"lastName\">Last name</label>\n" +
    "        <input class=\"span6\" type=\"text\" id=\"lastName\" name=\"lastName\" ng-model=\"user.lastName\" required>\n" +
    "        <span ng-show=\"showError('lastName', 'required')\" class=\"help-inline\">This field is required.</span>\n" +
    "        <label for=\"firstName\">First name</label>\n" +
    "        <input class=\"span6\" type=\"text\" id=\"firstName\" name=\"firstName\" ng-model=\"user.firstName\" required>\n" +
    "        <span ng-show=\"showError('firstName', 'required')\" class=\"help-inline\">This field is required.</span>\n" +
    "        <label for=\"password\">Password</label>\n" +
    "        <input class=\"span6\" type=\"password\" id=\"password\" name=\"password\" ng-model=\"user.password\" required>\n" +
    "        <span ng-show=\"showError('password', 'required')\" class=\"help-inline\">This field is required.</span>\n" +
    "        <span ng-show=\"showError('passwordRepeat', 'equal')\" class=\"help-inline\">Passwords do not match.</span>\n" +
    "        <label for=\"passwordRepeat\">Password (repeat)</label>\n" +
    "        <input class=\"span6\" type=\"password\" id=\"passwordRepeat\" name=\"passwordRepeat\" ng-model=\"password\" required validate-equals=\"user.password\">\n" +
    "        <span ng-show=\"showError('passwordRepeat', 'required')\" class=\"help-inline\">This field is required.</span>\n" +
    "        <span ng-show=\"showError('passwordRepeat', 'equal')\" class=\"help-inline\">Passwords do not match.</span>\n" +
    "        <label>Admin</label>\n" +
    "        <input type=\"checkbox\" ng-model=\"user.admin\">\n" +
    "        <hr>\n" +
    "        <crud-buttons></crud-buttons>\n" +
    "    </form>\n" +
    "</div>");
}]);

angular.module("admin/users/users-list.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/users/users-list.tpl.html",
    "<table class=\"table table-bordered table-condensed table-striped table-hover\">\n" +
    "    <thead>\n" +
    "    <tr>\n" +
    "        <th></th>\n" +
    "        <th>E-mail</th>\n" +
    "        <th>Last name</th>\n" +
    "        <th>First name</th>\n" +
    "    </tr>\n" +
    "    </thead>\n" +
    "    <tbody>\n" +
    "    <tr ng-repeat=\"user in users\" ng-click=\"edit(user.$id())\">\n" +
    "        <td><gravatar email=\"user.email\" size=\"50\" default-image=\"'monsterid'\"></gravatar></td>\n" +
    "        <td>{{user.email}}</td>\n" +
    "        <td>{{user.lastName}}</td>\n" +
    "        <td>{{user.firstName}}</td>\n" +
    "        <td><button class=\"btn btn-danger remove\" ng-click=\"remove(user, $index, $event)\">Remove</button></td>\n" +
    "    </tr>\n" +
    "    </tbody>\n" +
    "</table>\n" +
    "<div class=\"well\">\n" +
    "    <button class=\"btn\" ng-click=\"new()\">New User</button>\n" +
    "</div>\n" +
    "");
}]);

angular.module("dashboard/dashboard.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("dashboard/dashboard.tpl.html",
    "<h4>My projects</h4>\n" +
    "<div ng-include=\"'projects/projects-list.tpl.html'\">\n" +
    "</div>\n" +
    "\n" +
    "<h4>My tasks</h4>\n" +
    "<table class=\"table table-bordered table-condensed table-striped table-hover\">\n" +
    "    <thead>\n" +
    "    <tr>\n" +
    "        <th class=\"span8\">Name</th>\n" +
    "        <th class=\"span1\">Estimation</th>\n" +
    "        <th class=\"span1\">Remaining</th>\n" +
    "        <th class=\"span2\">Tools</th>\n" +
    "    </tr>\n" +
    "    </thead>\n" +
    "    <tbody>\n" +
    "    <tr ng-repeat=\"task in tasks\">\n" +
    "        <td>{{task.name}}</td>\n" +
    "        <td>{{task.estimation}}</td>\n" +
    "        <td>{{task.remaining}}</td>\n" +
    "        <td></td>\n" +
    "    </tr>\n" +
    "    <tr ng-show=\"!tasks.length\">\n" +
    "        <td colspan=\"4\">No tasks for you!</td>\n" +
    "    </tr>\n" +
    "    </tbody>\n" +
    "</table>");
}]);

angular.module("header.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("header.tpl.html",
    "<div class=\"navbar\" ng-controller=\"HeaderCtrl\">\n" +
    "    <div class=\"navbar-inner\">\n" +
    "        <a class=\"brand\" ng-click=\"home()\">AScrum</a>\n" +
    "        <ul class=\"nav\">\n" +
    "            <li ng-class=\"{active:isNavbarActive('projectsinfo')}\"><a href=\"/projectsinfo\">Current Projects</a></li>\n" +
    "        </ul>\n" +
    "\n" +
    "        <ul class=\"nav\" ng-show=\"isAuthenticated()\">\n" +
    "            <li ng-class=\"{active:isNavbarActive('projects')}\"><a href=\"/projects\">My Projects</a></li>\n" +
    "            <li class=\"dropdown\" ng-class=\"{active:isNavbarActive('admin'), open:isAdminOpen}\" ng-show=\"isAdmin()\">\n" +
    "                <a id=\"adminmenu\" role=\"button\" class=\"dropdown-toggle\" ng-click=\"isAdminOpen=!isAdminOpen\">Admin<b class=\"caret\"></b></a>\n" +
    "                <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"adminmenu\">\n" +
    "                    <li><a tabindex=\"-1\" href=\"/admin/projects\" ng-click=\"isAdminOpen=false\">Manage Projects</a></li>\n" +
    "                    <li><a tabindex=\"-1\" href=\"/admin/users\" ng-click=\"isAdminOpen=false\">Manage Users</a></li>\n" +
    "                </ul>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "        <ul class=\"nav pull-right\" ng-show=\"hasPendingRequests()\">\n" +
    "            <li class=\"divider-vertical\"></li>\n" +
    "            <li><a href=\"#\"><img src=\"/static/img/spinner.gif\"></a></li>\n" +
    "        </ul>\n" +
    "        <login-toolbar></login-toolbar>\n" +
    "    </div>\n" +
    "    <div>\n" +
    "        <ul class=\"breadcrumb\">\n" +
    "            <li ng-repeat=\"breadcrumb in breadcrumbs.getAll()\">\n" +
    "                <span class=\"divider\">/</span>\n" +
    "                <ng-switch on=\"$last\">\n" +
    "                    <span ng-switch-when=\"true\">{{breadcrumb.name}}</span>\n" +
    "                    <span ng-switch-default><a href=\"{{breadcrumb.path}}\">{{breadcrumb.name}}</a></span>\n" +
    "                </ng-switch>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("notifications.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("notifications.tpl.html",
    "<div ng-class=\"['alert', 'alert-'+notification.type]\" ng-repeat=\"notification in notifications.getCurrent()\">\n" +
    "    <button class=\"close\" ng-click=\"removeNotification(notification)\">x</button>\n" +
    "    {{notification.message}}\n" +
    "</div>\n" +
    "");
}]);

angular.module("projects/productbacklog/productbacklog-edit.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("projects/productbacklog/productbacklog-edit.tpl.html",
    "<div class=\"well\">\n" +
    "    <h4>Product backlog item</h4>\n" +
    "    <hr>\n" +
    "    <form name=\"form\" crud-edit=\"backlogItem\">\n" +
    "        <label>Name</label>\n" +
    "        <input type=\"text\" name=\"name\" ng-model=\"backlogItem.name\" class=\"span10\" required autofocus>\n" +
    "        <label>User story</label>\n" +
    "        <textarea rows=\"8\" cols=\"10\" ng-model=\"backlogItem.desc\" class=\"span10\" required>\n" +
    "        </textarea>\n" +
    "        <label>Priority</label>\n" +
    "        <input type=\"number\" ng-model=\"backlogItem.priority\" required>\n" +
    "        <label>Estimation</label>\n" +
    "        <input type=\"number\" ng-model=\"backlogItem.estimation\" required>\n" +
    "        <hr>\n" +
    "        <crud-buttons></crud-buttons>\n" +
    "    </form>\n" +
    "</div>");
}]);

angular.module("projects/productbacklog/productbacklog-list.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("projects/productbacklog/productbacklog-list.tpl.html",
    "<table class=\"table table-bordered table-condensed table-striped table-hover\">\n" +
    "    <thead>\n" +
    "    <tr>\n" +
    "        <th>Name</th>\n" +
    "        <th>Description</th>\n" +
    "        <th>Priority</th>\n" +
    "        <th>Estimation</th>\n" +
    "    </tr>\n" +
    "    </thead>\n" +
    "    <tbody>\n" +
    "    <tr ng-repeat=\"backlogItem in backlog\" ng-click=\"edit(backlogItem.$id())\">\n" +
    "        <td>{{backlogItem.name}}</td>\n" +
    "        <td>{{backlogItem.desc}}</td>\n" +
    "        <td>{{backlogItem.priority}}</td>\n" +
    "        <td>{{backlogItem.estimation}}</td>\n" +
    "    </tr>\n" +
    "    <tr ng-show=\"!backlog.length\">\n" +
    "        <td colspan=\"4\">No items in the backlog</td>\n" +
    "    </tr>\n" +
    "    </tbody>\n" +
    "</table>\n" +
    "<div class=\"well\">\n" +
    "    <button class=\"btn\" ng-click=\"new()\">New backlog item</button>\n" +
    "</div>");
}]);

angular.module("projects/projects-list.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("projects/projects-list.tpl.html",
    "<table class=\"table table-bordered table-condensed table-striped table-hover\">\n" +
    "    <thead>\n" +
    "    <tr>\n" +
    "        <th class=\"span3\">Name</th>\n" +
    "        <th class=\"span5\">Description</th>\n" +
    "        <th class=\"span2\">My Role(s)</th>\n" +
    "        <th class=\"span2\">Tools</th>\n" +
    "    </tr>\n" +
    "    </thead>\n" +
    "    <tbody>\n" +
    "    <tr ng-repeat=\"project in projects\">\n" +
    "        <td ng-click=\"manageBacklog(project)\">{{project.name}}</td>\n" +
    "        <td ng-click=\"manageBacklog(project)\">{{project.desc}}</td>\n" +
    "        <td>{{ getMyRoles(project) }}</td>\n" +
    "        <td>\n" +
    "            <a ng-click=\"manageBacklog(project)\">Product backlog</a>\n" +
    "            <a ng-click=\"manageSprints(project)\">Sprints</a>\n" +
    "        </td>\n" +
    "    </tr>\n" +
    "    </tbody>\n" +
    "</table>");
}]);

angular.module("projects/sprints/sprints-edit.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("projects/sprints/sprints-edit.tpl.html",
    "<div class=\"well\">\n" +
    "    <h4>Sprint</h4>\n" +
    "    <hr>\n" +
    "    <form name=\"form\" crud-edit=\"sprint\">\n" +
    "        <div class=\"row-fluid\">\n" +
    "            <div class=\"span6\">\n" +
    "                <label>Name</label>\n" +
    "                <input type=\"text\" name=\"name\" ng-model=\"sprint.name\" class=\"span10\" required autofocus>\n" +
    "                <label>Capacity</label>\n" +
    "                <input type=\"number\" name=\"description\" ng-model=\"sprint.capacity\" class=\"span5\" required>\n" +
    "            </div>\n" +
    "            <div class=\"span6\">\n" +
    "                <label>Start date</label>\n" +
    "                <input type=\"text\" name=\"name\" ng-model=\"sprint.start\" class=\"span5\" required>\n" +
    "                <label>End date</label>\n" +
    "                <input type=\"text\" name=\"name\" ng-model=\"sprint.end\" class=\"span5\" required>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <hr>\n" +
    "        <h4>Sprint backlog</h4>\n" +
    "        <hr>\n" +
    "        <div class=\"row-fluid\">\n" +
    "            <div class=\"span6\">\n" +
    "                <label>Currently in the sprint's backlog</label>\n" +
    "                <table class=\"table table-bordered table-condensed table-striped table-hover\">\n" +
    "                    <thead>\n" +
    "                    <tr>\n" +
    "                        <th class=\"span8\">Name</th>\n" +
    "                        <th class=\"span2\">Estimation</th>\n" +
    "                        <th class=\"span2\">Tools</th>\n" +
    "                    </tr>\n" +
    "                    </thead>\n" +
    "                    <tbody>\n" +
    "                    <tr ng-repeat=\"sprintBacklogItem in sprint.sprintBacklog\">\n" +
    "                        <td><a ng-click=\"viewProductBacklogItem(sprintBacklogItem)\">{{productBacklogLookup[sprintBacklogItem].name}}</a>\n" +
    "                        </td>\n" +
    "                        <td>{{productBacklogLookup[sprintBacklogItem].estimation}}</td>\n" +
    "                        <td>\n" +
    "                            <button class=\"btn btn-mini btn-danger\" ng-click=\"removeBacklogItem(sprintBacklogItem)\">\n" +
    "                                Remove\n" +
    "                            </button>\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                    </tbody>\n" +
    "                    <tfoot>\n" +
    "                    <tr>\n" +
    "                        <td>Estimation in total</td>\n" +
    "                        <td>{{estimationInTotal()}}</td>\n" +
    "                        <td>-</td>\n" +
    "                    </tr>\n" +
    "                    </tfoot>\n" +
    "                </table>\n" +
    "            </div>\n" +
    "            <div class=\"span6\">\n" +
    "                <label>Product backlog</label>\n" +
    "                <table class=\"table table-bordered table-condensed table-striped table-hover\">\n" +
    "                    <thead>\n" +
    "                    <tr>\n" +
    "                        <th class=\"span8\">Name</th>\n" +
    "                        <th class=\"span2\">Estimation</th>\n" +
    "                        <th class=\"span2\">Tools</th>\n" +
    "                    </tr>\n" +
    "                    </thead>\n" +
    "                    <tbody>\n" +
    "                    <tr ng-repeat=\"productBacklogItem in productBacklog | filter:notSelected\">\n" +
    "                        <td>\n" +
    "                            <a ng-click=\"viewProductBacklogItem(productBacklogItem.$id())\">{{productBacklogItem.name}}</a>\n" +
    "                        </td>\n" +
    "                        <td>{{productBacklogItem.estimation}}</td>\n" +
    "                        <td>\n" +
    "                            <button class=\"btn btn-mini\" ng-click=\"addBacklogItem(productBacklogItem)\">Add to sprint\n" +
    "                            </button>\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                    </tbody>\n" +
    "                </table>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <hr>\n" +
    "        <div>\n" +
    "            <crud-buttons></crud-buttons>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>");
}]);

angular.module("projects/sprints/sprints-list.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("projects/sprints/sprints-list.tpl.html",
    "<table class=\"table table-bordered table-condensed table-striped table-hover\">\n" +
    "    <thead>\n" +
    "    <tr>\n" +
    "        <th>Name</th>\n" +
    "        <th>Start date</th>\n" +
    "        <th>End date</th>\n" +
    "        <th>Status</th>\n" +
    "        <th>Tools</th>\n" +
    "    </tr>\n" +
    "    </thead>\n" +
    "    <tbody>\n" +
    "    <tr ng-repeat=\"sprint in sprints\">\n" +
    "        <td ng-click=\"edit(sprint.$id())\">{{sprint.name}}</td>\n" +
    "        <td ng-click=\"edit(sprint.$id())\">{{sprint.start}}</td>\n" +
    "        <td ng-click=\"edit(sprint.$id())\">{{sprint.end}}</td>\n" +
    "        <td ng-click=\"edit(sprint.$id())\">ACTIVE</td>\n" +
    "        <td>\n" +
    "            <button type=\"button\" class=\"btn btn-mini\" ng-click=\"tasks(sprint)\">Tasks</button>\n" +
    "        </td>\n" +
    "    </tr>\n" +
    "    <tr ng-show=\"!sprints.length\">\n" +
    "        <td colspan=\"5\">No sprints defined</td>\n" +
    "    </tr>\n" +
    "    </tbody>\n" +
    "</table>\n" +
    "<div class=\"well\">\n" +
    "    <button class=\"btn\" ng-click=\"new()\">New sprint</button>\n" +
    "</div>");
}]);

angular.module("projects/sprints/tasks/tasks-edit.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("projects/sprints/tasks/tasks-edit.tpl.html",
    "<div class=\"well\">\n" +
    "    <div class=\"row-fluid\">\n" +
    "        <form name=\"form\" crud-edit=\"task\">\n" +
    "            <div class=\"span6\">\n" +
    "                <label>Name</label>\n" +
    "                <input type=\"text\" name=\"name\" ng-model=\"task.name\" class=\"span10\" required autofocus>\n" +
    "                <label>Product Backlog item</label>\n" +
    "                <select name=\"productBacklog\" class=\"span10\" ng-model=\"task.productBacklogItemId\" ng-options=\"backlogItem.$id() as backlogItem.name for backlogItem in sprintBacklogItems\" required></select>\n" +
    "                <label>Description</label>\n" +
    "                <textarea rows=\"8\" cols=\"10\" ng-model=\"task.desc\" class=\"span10\" required>\n" +
    "                </textarea>\n" +
    "            </div>\n" +
    "            <div class=\"span6\">\n" +
    "                <label>Estimation</label>\n" +
    "                <input type=\"number\" name=\"estimation\" ng-model=\"task.estimation\" class=\"span5\" required>\n" +
    "                <label>Remaining</label>\n" +
    "                <input type=\"number\" name=\"remaining\" ng-model=\"task.remaining\" class=\"span5\" required>\n" +
    "                <label>State</label>\n" +
    "                <select name=\"state\" ng-model=\"task.state\" class=\"span5\" required ng-options=\"state for state in statesEnum\"></select>\n" +
    "                <label>Assigned to</label>\n" +
    "                <select name=\"state\" ng-model=\"task.assignedUserId\" class=\"span10\" ng-options=\"teamMember.$id() as teamMember.getFullName() for teamMember in teamMembers\"></select>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "    <hr>\n" +
    "    <crud-buttons></crud-buttons>\n" +
    "</div>");
}]);

angular.module("projects/sprints/tasks/tasks-list.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("projects/sprints/tasks/tasks-list.tpl.html",
    "<table class=\"table table-bordered table-condensed table-striped table-hover\">\n" +
    "    <thead>\n" +
    "    <tr>\n" +
    "        <th class=\"span8\">Name</th>\n" +
    "        <th class=\"span1\">Estimation</th>\n" +
    "        <th class=\"span1\">Remaining</th>\n" +
    "        <th class=\"span2\">Tools</th>\n" +
    "    </tr>\n" +
    "    </thead>\n" +
    "    <tbody>\n" +
    "    <tr ng-repeat=\"task in tasks\">\n" +
    "        <td ng-click=\"edit(task.$id())\">{{task.name}}</td>\n" +
    "        <td>{{task.estimation}}</td>\n" +
    "        <td>{{task.remaining}}</td>\n" +
    "        <td></td>\n" +
    "    </tr>\n" +
    "    <tr ng-show=\"!tasks.length\">\n" +
    "        <td colspan=\"4\">No tasks defined for this sprint</td>\n" +
    "    </tr>\n" +
    "    </tbody>\n" +
    "</table>\n" +
    "<div class=\"well\">\n" +
    "    <button class=\"btn\" ng-click=\"new()\">New task</button>\n" +
    "</div>");
}]);

angular.module("projectsinfo/list.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("projectsinfo/list.tpl.html",
    "<h3>Projects info</h3>");
}]);
