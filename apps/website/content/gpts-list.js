/**
 * Copyright 2023 Janus Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @type {import('ui/types').GPT[]} */

// TODO: Change githubUrl links to janus-idp/software-templates entries once they're all created
const GPTS_LIST = [
  {
    title: 'Ansible Job',
    description: 'Launch an Ansible Job within Ansible Automation Platform',
    href: 'gpts/ansible_job',
    rawGithubUrl:
      'https://raw.githubusercontent.com/Zaperex/software-templates/main/scaffolder-templates/ansible-job/README.md',
    githubUrl:
      'https://github.com/janus-idp/software-templates/tree/main/scaffolder-templates/ansible-job',
  },
  {
    title: 'Quarkus Service with ArgoCD and a Tekton Pipeline',
    description: 'Create a simple microservice using Quarkus with ArgoCD and a Tekton Pipeline',
    href: `gpts/quarkus`,
    rawGithubUrl:
      'https://raw.githubusercontent.com/Zaperex/software-templates/main/scaffolder-templates/quarkus-web-template/README.md',
    githubUrl:
      'https://github.com/janus-idp/software-templates/tree/main/scaffolder-templates/quarkus-web-template',
  },
  {
    title: 'Create a techdocs sample',
    description: 'Create a techdocs sample',
    href: 'gpts/techdocs',
    rawGithubUrl:
      'https://raw.githubusercontent.com/Zaperex/software-templates/main/scaffolder-templates/documentation-template/README.md',
    githubUrl:
      'https://github.com/janus-idp/software-templates/tree/main/scaffolder-templates/documentation-template',
  },
];

module.exports = GPTS_LIST;