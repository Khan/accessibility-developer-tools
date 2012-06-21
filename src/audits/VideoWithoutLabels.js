// Copyright 2012 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

AuditRules.addRule({
    name: 'videoWithoutLabels',
    severity: Severity.Warning,
    relevantNodesSelector: function() {
        return this.auditscope_.querySelectorAll('video');
    },
    test: function(video) {
        return !AccessibilityUtils.hasLabel(video);
    },
    code: 'AX_VIDEO_03',
    ruleName: 'Video elements should be labeled',
    resultsDetails: 'TODO',
    url: 'https://code.google.com/a/google.com/p/accessibility-developer-tools/wiki/AuditRules#AX_VIDEO_03:_Video_elements_should_be_labeled'
});