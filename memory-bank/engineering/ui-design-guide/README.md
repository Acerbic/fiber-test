---
title: UI Design Guide Index
doc_kind: engineering
doc_function: index
purpose: Project-level навигация по shared и surface-specific UI references. Читать, чтобы найти existing components, helper APIs, examples, screenshots и source paths для нужной UI surface.
derived_from:
  - ../../dna/governance.md
  - ../frontend.md
status: active
audience: humans_and_agents
canonical_for:
  - project_ui_design_guide_routing
must_not_define:
  - product_requirements
  - domain_rules
  - frontend_architecture_contract
  - feature_interface_requirements
  - implementation_source_of_truth
  - implementation_sequence
---

# UI Design Guide

В проекте подтверждена одна компактная public-web surface. Этот индекс ведёт к её наблюдаемым UI conventions; отдельные admin, mobile и shared-component surfaces отсутствуют.

## Ownership

- [`../frontend.md`](../frontend.md) владеет frontend stack, boundaries и обязательными engineering rules.
- Product и domain documents владеют product intent, business language и state semantics.
- `features/FT-XXX/ui-reference/README.md` описывает interface change конкретной feature.
- Код владеет фактическими component APIs, signatures и behavior. Этот guide владеет только curated discovery map; перед изменением проверяй source paths и examples по текущему checkout.

## Organization By UI Surface

Не смешивай сюда неподтверждённые admin, native-mobile или design-system conventions.

## Аннотированный Индекс

- [`public-web.md`](public-web.md) — current full-viewport scene, composition, interaction, and unresolved accessibility/responsive constraints.

## Surface Document Contract

Каждый surface document должен иметь governed frontmatter с `doc_kind: engineering`, `doc_function: reference`, `derived_from` на этот index и `../frontend.md`, а также только нужные секции из списка:

- component/pattern catalog с existing uses и source paths;
- forms, validation и error presentation;
- actions, navigation и interaction states;
- tables, collections, empty/loading/error states;
- visual labels со ссылками на semantic owners;
- helper APIs, representative examples и screenshots;
- agent entry points: что исследовать перед типовой UI задачей.

Не копируй в surface documents requirements, domain rules, frontend architecture contract, feature-specific interface design или implementation sequence.

## Maintenance

Обновляй соответствующий surface document, когда shared component, helper API, representative example или source path добавлен, удален или materially changed. Если запись не удается подтвердить по коду, исправь или удали ее до использования guide как implementation context.
