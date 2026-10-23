/* Rovo SDLC — single source of truth for all copy and step data.
   Edit text, stages, challenges, steps and product names here only.
   Every string has an `en` and `zh` (Simplified Chinese) version; product names stay in English. */

window.SDLC = {};

/* ---------------- page copy ---------------- */
SDLC.T = {
en:{
 crumb:"SDLC use cases",
 title:"How Rovo helps across the SDLC",
 lede:"AI coding assistants speed up the 16% of time spent in the editor. Rovo, Jira and Confluence work on the rest of the loop: turning ideas into clear requirements and ready work, then giving developers the context, standards and agents to ship.",
 heroTitle16:"GenAI gains in the IDE / Editor",
 heroTitle84:"Dev productivity challenges everywhere else",
 ofDev:"of dev time",
 cap16:"of dev time is coding and testing, where most AI tools focus today.",
 cap84:"of dev time goes to aligning, interpreting, translating, reviewing and planning.",
 aText:"We often assume the biggest efficiency bottleneck happens during coding. That's why many AI tools focus heavily on improving individual developer productivity. But if you step back and look at the full lifecycle, code writing is only one part of delivery.",
 bText:"A large amount of team time (84%) is actually spent aligning on requirements, interpreting documents, translating context into tasks, reviewing standards, and planning execution.",
 note84:"Even inside Develop and Test, most time goes to work around the code.",
 reset:"Reset",
 keyP1:"Alignment to execution · Discover + Plan",
 keyP2:"Developer productivity · Develop → Test → Deploy",
 p1Kicker:"Part 1 · Alignment to execution",
 p1Title:"From Charter to Sprint: get everyone aligned before the first line of code",
 p1Why:"Most delays start before development: unclear requirements, documents nobody can find, context lost between Confluence and Jira, and planning that depends on a few experienced people. Rovo makes each of these steps repeatable and checks each gate automatically.",
 verbs1:["Align on requirements","Interpret documents","Translate context into tasks","Review standards","Plan execution"],
 gateA:"Artefact checking",
 gateADesc:"Verify requirement docs, design specs, test plans, impact assessments and test evidence before work moves forward.",
 gateW:"Jira workflow automation",
 gateWDesc:"Triage, transition readiness checks and automated workflow gates, so the process remembers for the team.",
 p2Kicker:"Part 2 · Developer productivity",
 p2Title:"From Sprint to Release: developers start with full context, and agents handle the routine work",
 p2Why:"Once work is ready, Rovo Dev carries the Jira and Confluence context into the coding tools, applies the team's standards, and handles first-pass review, security fixes and broken builds, with people approving each change.",
 verbs2:["Start with context","Enforce standards","Delegate to agents","Review faster","Fix vulnerabilities","Keep pipelines green"],
 fbTitle:"Continuous feedback",
 fbText84:"Decisions, PR outcomes and post-incident learnings are written back to Confluence and connected in Teamwork Graph, so the next Charter starts from what the team already knows.",
 fbText16:"PR review outcomes, coding-standard fixes and pipeline failures are written back to Confluence and connected in Teamwork Graph, so the next coding session, for people and agents alike, starts from what the team has already learned.",
 what:"What Rovo does",removes:"Challenges addressed",products:"Products",stage:"Loop stage",gates:"Gate"
},
zh:{
 crumb:"SDLC 用例",
 title:"Rovo 如何贯穿 SDLC 全流程",
 lede:"AI 编码助手提升的是在编辑器里的 16% 时间。Rovo、Jira 与 Confluence 作用于循环的其余部分：先把想法转化为清晰的需求与可执行的工作，再为开发者提供上下文、规范与 Agent，加速交付。",
 heroTitle16:"GenAI 在 IDE / 编辑器中的提升",
 heroTitle84:"其余环节的研发效率挑战",
 ofDev:"的研发时间",
 cap16:"的研发时间用于编码与测试，也是目前多数 AI 工具关注的地方。",
 cap84:"的研发时间花在对齐、理解、转化、评审与规划上。",
 aText:"我们常以为最大的效率瓶颈出现在编码阶段，因此许多 AI 工具都着重提升个人开发者的生产力。但从完整的生命周期来看，写代码只是交付的一部分。",
 bText:"团队大量的时间（84%）实际花在对齐需求、理解文档、把上下文转化为任务、评审规范与规划执行上。",
 note84:"即使在开发与测试阶段，大部分时间也花在代码之外的工作上。",
 reset:"重置",
 keyP1:"从对齐到执行 · 发现 + 规划",
 keyP2:"开发者生产力 · 开发 → 测试 → 部署",
 p1Kicker:"第一部分 · 从对齐到执行",
 p1Title:"从项目章程到 Sprint：在写第一行代码之前完成对齐",
 p1Why:"多数延误发生在开发之前：需求不清晰、文档找不到、上下文在 Confluence 与 Jira 之间丢失、规划依赖少数资深成员。Rovo 让每一步都可复用，并自动执行每一道关卡的检查。",
 verbs1:["对齐需求","理解文档","将上下文转化为任务","评审规范","规划执行"],
 gateA:"工件检查（Artefact checking）",
 gateADesc:"在工作推进前，核对需求文档、设计规格、测试计划、影响评估与测试证据。",
 gateW:"Jira 工作流自动化",
 gateWDesc:"分诊、状态流转前的就绪检查与自动化流程关卡，让流程替团队记住该做的事。",
 p2Kicker:"第二部分 · 开发者生产力",
 p2Title:"从 Sprint 到发布：开发者带着完整上下文开工，Agent 处理例行工作",
 p2Why:"工作就绪后，Rovo Dev 把 Jira 与 Confluence 的上下文带进编码工具，套用团队规范，并完成首轮评审、安全修复与构建修复，每一项变更都由人审批。",
 verbs2:["带上下文开工","强制执行规范","委派给 Agent","加快评审","修复漏洞","保持流水线绿灯"],
 fbTitle:"持续反馈",
 fbText84:"决策、PR 结果与事后复盘写回 Confluence，并在 Teamwork Graph 中关联，下一份项目章程便能从团队已有的知识出发。",
 fbText16:"PR 评审结果、编码规范的修正与流水线失败记录写回 Confluence，并在 Teamwork Graph 中关联，下一次编码时，开发者与 Agent 都能从团队已有的经验出发。",
 what:"Rovo 做什么",removes:"解决的挑战",products:"产品",stage:"循环阶段",gates:"关卡"
}};

/* ---------------- the 7 stages, in loop order ----------------
   Left loop: discover → plan → develop → test · centre crossover · Right loop: deploy → operate → feedback · back to discover.
   in16 = a coding stage (lit by the 16% card). */
SDLC.STAGES = [
 {id:"discover",in16:false,en:"DISCOVER + PRIORITIZE",zh:"发现 + 排序"},
 {id:"plan",in16:false,en:"PLAN + TRACK",zh:"规划 + 跟踪"},
 {id:"develop",in16:true,en:"DEVELOP",zh:"开发"},
 {id:"test",in16:true,en:"TEST",zh:"测试"},
 {id:"deploy",in16:false,en:"DEPLOY",zh:"部署"},
 {id:"operate",in16:false,en:"OPERATE + SUPPORT",zh:"运维 + 支持"},
 {id:"feedback",in16:false,en:"CONTINUOUS FEEDBACK",zh:"持续反馈"}
];
SDLC.STAGE_NAME = {
 discover:{en:"Discover + Prioritize",zh:"发现 + 排序"},
 plan:{en:"Plan + Track",zh:"规划 + 跟踪"},
 develop:{en:"Develop",zh:"开发"},
 test:{en:"Test",zh:"测试"},
 deploy:{en:"Deploy",zh:"部署"},
 operate:{en:"Operate + Support",zh:"运维 + 支持"},
 feedback:{en:"Continuous Feedback",zh:"持续反馈"}
};

/* ---------------- the 17 challenges, each used once ----------------
   st = the stage it belongs to. x/y = box centre in the loop's SVG coordinates (viewBox -720 -375 1440 705).
   Every box is placed in its own stage's zone, and a short connector is drawn to the nearest point on that stage.
   Boxes in a stack are 48 units apart. */
SDLC.CH = {
 /* Discover + Prioritize · above the top-left of the loop */
 prioritize:{st:"discover",en:"Prioritizing ideas",zh:"想法优先级排序",x:-160,y:-245},
 requirements:{st:"discover",en:"Missing clear requirements",zh:"需求不清晰",x:-160,y:-293},
 /* Plan + Track · left column, above the far-left point */
 sprint:{st:"plan",en:"Slow sprint planning",zh:"Sprint 规划缓慢",x:-560,y:-110},
 ownership:{st:"plan",en:"Missing clear ownership",zh:"职责归属不清",x:-560,y:-158},
 deps:{st:"plan",en:"Dependency blockers",zh:"依赖阻塞",x:-560,y:-206},
 /* Develop · left column, below the far-left point */
 coldstart:{st:"develop",en:"Developer cold starts",zh:"开发者冷启动",x:-560,y:110},
 docs:{st:"develop",en:"Finding docs",zh:"查找文档",x:-560,y:158},
 debt:{st:"develop",en:"Tech debt",zh:"技术债务",x:-560,y:206},
 pr:{st:"develop",en:"Slow PR reviews",zh:"PR 评审缓慢",x:-560,y:254},
 /* Test · below the bottom-left of the loop */
 coverage:{st:"test",en:"Poor code coverage",zh:"代码覆盖率低",x:-160,y:245},
 compliance:{st:"test",en:"Missing compliance",zh:"合规缺失",x:-160,y:293},
 /* Deploy · above the top-right of the loop */
 manual:{st:"deploy",en:"Manual steps",zh:"手动步骤",x:160,y:-245},
 drift:{st:"deploy",en:"Configuration drift",zh:"配置漂移",x:160,y:-293},
 flags:{st:"deploy",en:"Feature flag clutter",zh:"Feature flag 杂乱",x:160,y:-341},
 /* Operate + Support · right column, beside the far-right point */
 instr:{st:"operate",en:"Inconsistent instrumentation",zh:"埋点与监控不一致",x:560,y:-24},
 nodocs:{st:"operate",en:"Lack of documentation",zh:"文档缺失",x:560,y:24},
 /* Continuous Feedback · below the bottom-right of the loop */
 feedback:{st:"feedback",en:"Processing user feedback",zh:"处理用户反馈",x:160,y:245}
};

/* ---------------- Part 1 · Alignment to execution ----------------
   ic = icon key (assets/icons.js) · hl = highlighted gate step · stage = loop stage
   marks: "a" = Artefact checking, "w" = Jira workflow automation
   ch = challenge keys from SDLC.CH · pr = product names (names starting with "Rovo" render purple) */
SDLC.P1 = [
 {n:1,ic:"flag",hl:false,stage:"discover",marks:[],
  en:{nm:"Charter",t:"Project kickoff with a Charter agent",d:["Rovo pulls existing pages, Jira work and people from Teamwork Graph to draft goals, scope, stakeholders and risks","The team reviews and aligns on one Confluence page from day one"]},
  zh:{nm:"项目章程",t:"用项目章程 Agent 启动项目",d:["Rovo 从 Teamwork Graph 汇集相关页面、Jira 工作与人员，起草目标、范围、干系人与风险","团队从第一天就在同一个 Confluence 页面上对齐"]},
  ch:["ownership","requirements","coldstart"],pr:["Rovo Agents","Confluence","Teamwork Graph"]},
 {n:2,ic:"page",hl:false,stage:"discover",marks:[],
  en:{nm:"PRD",t:"Charter to PRD",d:["Rovo turns the agreed charter into a structured PRD: user stories, non-functional requirements and acceptance criteria","Every section cites its source page, so reviewers can trace where it came from"]},
  zh:{nm:"PRD",t:"从项目章程到 PRD（产品需求文档）",d:["Rovo 把已达成共识的项目章程转为结构化 PRD：用户故事、非功能需求与验收标准","每一节都引用来源页面，评审者可以追溯出处"]},
  ch:["requirements","docs","nodocs"],pr:["Rovo","Confluence"]},
 {n:3,ic:"epic",hl:true,stage:"plan",marks:["w"],
  en:{nm:"Epic",t:"Confluence to Jira Epic",d:["Create Jira epics directly from the PRD, linked back to the page","Requirements and decisions travel with the work, so context is never lost"]},
  zh:{nm:"Epic",t:"从 Confluence 到 Jira Epic",d:["直接从 PRD 创建 Jira Epic，并与页面双向关联","需求与决策随工作一起流转，上下文不再丢失"]},
  ch:["coldstart","docs"],pr:["Confluence","Jira","Rovo"]},
 {n:4,ic:"check",hl:true,stage:"plan",marks:["a","w"],
  en:{nm:"Ready Check",t:"Definition of Ready check",d:["A Rovo agent checks each ticket for required artefacts: acceptance criteria, design spec, test plan, impact assessment","Gaps are flagged on the ticket before it can move into development"]},
  zh:{nm:"就绪检查",t:"Definition of Ready 检查",d:["Rovo Agent 逐一检查工单是否具备必要工件：验收标准、设计规格、测试计划、影响评估","进入开发前，缺漏会直接标注在工单上"]},
  ch:["requirements","compliance"],pr:["Rovo Agents","Jira","Jira Automation"]},
 {n:5,ic:"story",hl:true,stage:"plan",marks:["w"],
  en:{nm:"Stories",t:"Auto-splitting stories",d:["A story-splitting agent breaks each epic into INVEST-ready stories using the team's own patterns","One person's experience becomes a capability the whole team can reuse"]},
  zh:{nm:"故事拆分",t:"自动拆分用户故事",d:["故事拆分 Agent 依照团队自己的模式，把 Epic 拆成符合 INVEST 的故事","个人经验变成整个团队可复用的能力"]},
  ch:["sprint","coldstart"],pr:["Rovo Agents","Jira"]},
 {n:6,ic:"shield",hl:true,stage:"plan",marks:["a","w"],
  en:{nm:"Compliance",t:"Automated compliance checks",d:["Jira Automation calls a Rovo agent at key transitions to verify artefacts and compliance evidence","Audit tasks are created automatically, so every check runs every time"]},
  zh:{nm:"合规检查",t:"自动化合规检查",d:["Jira Automation 在关键状态流转时调用 Rovo Agent，核对工件与合规证据","自动生成审计任务，每次都按规则检查"]},
  ch:["compliance","manual"],pr:["Jira Automation","Rovo Agents"]},
 {n:7,ic:"estimate",hl:false,stage:"plan",marks:[],
  en:{nm:"Estimation",t:"Story point estimation",d:["Rovo compares each story with similar completed work and suggests a baseline estimate with its reasoning","The team starts planning from a shared reference instead of guesswork"]},
  zh:{nm:"估算",t:"故事点估算",d:["Rovo 将每个故事与相似的已完成工作比较，给出基准估算与理由","团队从共同的参考点开始规划，而不是凭感觉"]},
  ch:["sprint"],pr:["Rovo Agents","Jira"]},
 {n:8,ic:"sprint",hl:true,stage:"plan",marks:["w"],
  en:{nm:"Sprint",t:"Sprint planning",d:["Rovo summarises readiness, capacity, dependencies and risks across the backlog","Ready, estimated work goes into the sprint with its full context attached"]},
  zh:{nm:"Sprint",t:"Sprint 规划",d:["Rovo 汇总待办事项的就绪状态、容量、依赖与风险","已就绪、已估算的工作带着完整上下文进入 Sprint"]},
  ch:["sprint","prioritize","deps"],pr:["Jira","Rovo","Jira Automation"]}
];

/* ---------------- Part 2 · Developer productivity ---------------- */
SDLC.P2 = [
 {n:1,ic:"handoff",stage:"develop",
  en:{nm:"Context handoff",t:"Jira to IDE, with context",d:["Open a Jira work item straight into the coding tool through Rovo Dev","The linked PRD, acceptance criteria and designs come with it, so there's no cold start"]},
  zh:{nm:"上下文交接",t:"从 Jira 到 IDE，带着上下文",d:["通过 Rovo Dev 把 Jira 工作项直接带进编码工具","关联的 PRD、验收标准与设计一并带入，不再冷启动"]},
  ch:["coldstart","docs"],pr:["Rovo Dev","Jira","Teamwork Graph"]},
 {n:2,ic:"book",stage:"develop",
  en:{nm:"Coding Standards",t:"Define standards once, apply them everywhere",d:["The team's coding standards are defined in one place","They are applied when code is generated and checked again at review"]},
  zh:{nm:"Coding Standards",t:"规范一处定义，处处执行",d:["团队的编码规范集中在一处定义","生成代码时即套用，评审时再次检查"]},
  ch:["debt","instr"],pr:["Rovo Dev","Confluence"]},
 {n:3,ic:"agent",stage:"develop",
  en:{nm:"Jira Coding Agent",t:"Delegate work items to an agent",d:["Assign a Jira work item to the coding agent, which works in a sandbox, with several agents able to run in parallel","It opens a pull request for a developer to review and approve"]},
  zh:{nm:"Jira Coding Agent",t:"把工作项委派给 Agent",d:["将 Jira 工作项指派给编码 Agent，在沙箱中执行，可多个 Agent 并行","完成后提交 PR，由开发者评审与批准"]},
  ch:["manual","debt","flags"],pr:["Rovo Dev","Jira"]},
 {n:4,ic:"review",stage:"test",
  en:{nm:"AI Code Reviewer",t:"First-pass review on every PR",d:["Reviews each pull request against the acceptance criteria and coding standards","Points out the specific rule broken, so human reviewers can focus on design decisions"]},
  zh:{nm:"AI Code Reviewer",t:"每个 PR 的首轮评审",d:["依据验收标准与编码规范评审每个 PR","指出违反的具体规则，人工评审可专注于设计决策"]},
  ch:["pr","coverage"],pr:["Rovo Dev","Bitbucket","GitHub"]},
 {n:5,ic:"bug",stage:"deploy",
  en:{nm:"Vulnerability auto-assign",t:"Security findings routed and fixed",d:["Vulnerability work items are routed automatically by policy as they land on the board","An agent opens a fix PR, and every step is tracked in Jira for audit"]},
  zh:{nm:"漏洞自动派单",t:"安全问题自动分派与修复",d:["漏洞工单进入看板时，依策略自动分派","Agent 提交修复 PR，每一步都在 Jira 中留下可审计的记录"]},
  ch:["compliance","debt","deps"],pr:["Jira Automation","Rovo Dev","Jira"]},
 {n:6,ic:"pipeline",stage:"deploy",
  en:{nm:"Self-healing pipelines",t:"Broken builds explained and fixed",d:["When a pipeline fails, the agent explains the cause","It opens a fix PR so the build goes green again without someone digging through logs"]},
  zh:{nm:"自愈流水线",t:"构建失败自动解释与修复",d:["流水线失败时，Agent 解释失败原因","提交修复 PR 让构建恢复绿灯，无需人工翻查日志"]},
  ch:["drift","manual"],pr:["Rovo Dev","Bitbucket Pipelines"]}
];
