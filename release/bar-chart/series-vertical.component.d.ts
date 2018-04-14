import { EventEmitter, OnChanges, TemplateRef } from '@angular/core';
export declare enum D0Types {
    positive = 0,
    negative = 0,
}
export declare class SeriesVerticalComponent implements OnChanges {
    dims: any;
    type: string;
    series: any;
    xScale: any;
    yScale: any;
    colors: any;
    gradient: boolean;
    activeEntries: any[];
    seriesName: string;
    tooltipDisabled: boolean;
    tooltipTemplate: TemplateRef<any>;
    roundEdges: boolean;
    animations: boolean;
    select: EventEmitter<{}>;
    activate: EventEmitter<{}>;
    deactivate: EventEmitter<{}>;
    tooltipPlacement: string;
    tooltipType: string;
    bars: any;
    x: any;
    y: any;
    ngOnChanges(changes: any): void;
    update(): void;
    updateTooltipSettings(): void;
    isActive(entry: any): boolean;
    onClick(data: any): void;
    trackBy(index: any, bar: any): string;
}
