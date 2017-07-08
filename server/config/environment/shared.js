'use strict';

exports = module.exports = {
  version: 'Alpha',
  // List of user roles
  userRoles: ['guest', 'user', 'admin'],
  'scriptEngine' : {
    'host' : process.env.SCRIPT_ENGINE_HOST || 'localhost',
    'user' : process.env.SCRIPT_ENGINE_USER || 'root',
    // This is the default root password for local container set during docker container rebuild
    'password' : process.env.SCRIPT_ENGINE_PASSWORD || 'P@ssw0rd@123'
  },

  paths: {
    ansible_projects: '/opt/ansible-projects',
    ansible_projects_arhive: '/archive', // relative to projects folder
    ansible_custom_api_local: './helpers/AnsibleAPI.py',
    ansible_custom_api_remote: '/tmp/AnsibleAPI.py',
    ansible_dir_tree_local: './helpers/dir_tree.py',
    ansible_dir_tree_remote: '/tmp/dir_tree.py',
    ansible_list_tasks_json_local: './helpers/list_tasks_json.py',
    ansible_list_tasks_json_remote: '/tmp/list_tasks_json.py',
    ansible_project_library: '/library', // relative to project folder
    ansible_project_roles: '/roles', // relative to project folder

  }
};
